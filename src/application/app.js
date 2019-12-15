function run(uiEngine, ajax) {
  let view = uiEngine.initialRender({
    name: "Citation application",
    lastSearch: "",
    status: null,
    result: null,
    commands: {
      async load(search) {
        view = view.update(s => {
          s.result = null;
          s.status = "loading";
          s.lastSearch = search;
        });
        const res = await ajax.get(
          `api.tronalddump.io/search/quote?query=${search}`
        );
        view = view.update(s => {
          s.result = res;
          s.status = res.count === 0 ? "nothing found" : "found result";
        });
      }
    }
  });
}

export { run };
