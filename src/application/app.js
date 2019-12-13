function run(uiEngine, ajax) {
  let view = uiEngine.initialRender({
    name: "Citation application",
    loading: false,
    error: null,
    status: null,
    result: null,
    commands: {
      async load(search) {
        view = view.update(s => {
          s.result = null;
          s.loading = true;
          s.status = null;
        });
        const res = await ajax.get(`api.tronalddump.io/search/quote?query=${search}`);
        view = view.update(s => {
          s.loading = false;
          s.result = res;
          s.status = (res.count === 0) ? "nothing found" : "found result"
        });
      }
    }
  });



}

export { run };
