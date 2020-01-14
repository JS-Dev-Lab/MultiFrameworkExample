import { html } from "lit-html";

function template({ state: { name, status, lastSearch, result }, commands }) {
  const onSubmit = evt => {
    commands.load(evt.target.query.value);
    evt.preventDefault();
  };

  return html`
    <div>
      <h1>${name}</h1>
      <form @submit=${onSubmit}>
        <input type="text" name="query" value=${lastSearch} />
        <button>Search</button>
      </form>
      ${status === "loading"
        ? html`
            <p>loading...</p>
          `
        : status !== "found result"
        ? html`
            <p>${status || ""}</p>
          `
        : html`
            <ul>
              ${result._embedded.quotes.map(
                quote =>
                  html`
                    <li>${quote.value}</li>
                  `
              )}
            </ul>
          `}
    </div>
  `;
}

export { template };
