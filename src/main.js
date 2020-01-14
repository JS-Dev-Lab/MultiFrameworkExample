import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";
import { ajax } from "./infra/fetchAjax"

async function main(type) {
  const createView = await getEngine(type);
  run(createView, ajax);
}

window.console.log(process.env.Framework);
main(process.env.Framework);
