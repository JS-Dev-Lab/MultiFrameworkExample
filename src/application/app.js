function run(createView, ajax) {
  const view = createView({
    state: {
      name: "Citation application",
      lastSearch: "",
      status: null,
      result: null,
    },
    commands: {
      async load(search) {
        view.update(s => {
          s.result = null;
          s.status = "loading";
          s.lastSearch = search;
        });
        const res = await ajax.get(
          `api.tronalddump.io/search/quote?query=${search}`
        );
        view.update(s => {
          s.result = res;
          s.status = res.count === 0 ? "nothing found" : "found result";
        });
      }
    }
  });
}

export { run };
