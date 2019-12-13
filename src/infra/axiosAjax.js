import axios from "axios";

const instance = axios.create({
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

class Ajax {
  async get(url) {
    const res = await instance.get(url);
    return res.data;
  }
}

const ajax = new Ajax();
export { ajax }