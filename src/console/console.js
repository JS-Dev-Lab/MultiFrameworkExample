const { UiEngine } = require("./consoleEngine");
const { run } = require("../application/app");
const { ajax } = require("../infra/axiosAjax");
const { prompt } = require("inquirer");

const render = async (state, print) => {
  switch (state.status) {
    case "loading":
      print("loading...");
      return;

    case "nothing found":
      print("nothing found");
      break;

    case "found result":
      state.result._embedded.quotes.forEach(element => {
        print(`* ${element.value}`);
      });
      break;
  }

  await ask(state);
};

const ask = async state => {
  const { query } = await enterQuery();
  if (query === "") {
    return;
  }
  state.commands.load(query);
};

function enterQuery() {
  const answer = prompt([
    {
      type: "input",
      name: "query",
      message: "Enter search term"
    }
  ]);
  return answer;
}

const engine = new UiEngine(render);

run(engine, ajax);
