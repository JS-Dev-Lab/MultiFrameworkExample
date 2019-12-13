import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";
import { ajax } from "./infra/fetchAjax"

async function main(type) {
  const engine = await getEngine(type);
  run(engine, ajax);
}

window.console.log(ajax);
window.console.log(process.env.Framework);
main(process.env.Framework);
