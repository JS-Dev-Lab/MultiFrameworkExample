import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.state, query: "" };
  }

  render() {
    const {
      state: { query, status, name, result },
      props: {
        commands: { load }
      }
    } = this;
    const onSubmit = evt => {
      evt.preventDefault();
      load(this.state.query);
    };
    const onChange = evt => {
      this.setState({ query: evt.target.value });
    };

    let mainResult;

    switch (status) {
      case "loading":
        mainResult = <p>loading...</p>;
        break;

      case "found result":
        mainResult = (
          <ul>
            {result._embedded.quotes.map(quote => (
              <li key={quote.value}>{quote.value}</li>
            ))}
          </ul>
        );
        break;

      default:
        mainResult = <p>{status || ""}</p>;
    }

    return (
      <div className="App">
        <h1>{name}</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="query" value={query} onChange={onChange} />
          <button>Search</button>
        </form>
        {mainResult}
      </div>
    );
  }
}

export default App;
