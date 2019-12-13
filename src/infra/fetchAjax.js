class Ajax {
  async get(url) {
    const res = await fetch(url);
    return res.json();
  }
}

const ajax = new Ajax();
export { ajax }