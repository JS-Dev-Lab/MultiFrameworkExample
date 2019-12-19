function render({ name, status, lastSearch, result}) {
  return `
    <h1>${name}</h1>
    <form onsubmit="state.commands.load(this.query.value);event.preventDefault();">
      <input type="text" name="query" value="${lastSearch}"/>
      <button>Search</button>
    </form>
    ${status==='loading' ? "<p>loading...</p>" :
    (status!=='found result') ? `<p>${status||''}</p>`:
      `<ul>
      ${result._embedded.quotes.map(quote => `<li>${quote.value}</li>`).join("")}
      </ul>`
    }`;
}

export { render };
