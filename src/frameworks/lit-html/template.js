import { html } from 'lit-html';

function template({ commands, name, status, lastSearch, result }) {
  const submit = (event) => {
    commands.load(event.target.query.value);
    event.preventDefault();
  };
  return html`
    <h1>${name}</h1>
    <form @submit=${submit}>
      <input type="text" name="query" value=${lastSearch} />
      <button>Search</button>
    </form>
    ${status === 'loading' ? html`<p>loading...</p>` :
      (status !== 'found result') ? html`<p>${status || ''}</p>` :
        html`<ul>
      ${result._embedded.quotes.map(quote => html`<li>${quote.value}</li>`)}
      </ul>`
    }`;
}

export { template };
