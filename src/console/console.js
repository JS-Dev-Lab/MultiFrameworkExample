const { viewCreatorFactory } = require("./consoleEngine");
const { run } = require("../application/app");
const { ajax } = require("../infra/axiosAjax");
const { prompt } = require("inquirer");

const render = async ({ state, commands }, print) => {
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

  await ask(commands);
};

const ask = async commands => {
  const { query } = await enterQuery();
  if (query === "") {
    return;
  }
  commands.load(query);
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

const createView = viewCreatorFactory(render);

run(createView, ajax);
