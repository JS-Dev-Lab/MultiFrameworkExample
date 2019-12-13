class UiEngine {
  constructor( render) {
    this._render = render;
  }

  initialRender(state) {
    return new View({ ...state }, this._render);
  }
}

class View {
  constructor(state, render) {
    this._state = Object.freeze(state);
    this._render = render;
    render(this._state);
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    return new View(newState, this._render);
  }
}

export { UiEngine };
