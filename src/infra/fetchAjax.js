class Ajax {
  async get(url) {
    const res = await fetch(`http://cors-anywhere.herokuapp.com/${url}`);
    return res.json();
  }
}

const ajax = new Ajax();
export { ajax }