import {get} from "axios";

class Ajax {
  async get(url) {
    const res = await get(`http://${url}`);
    return res.data;
  }
}

const ajax = new Ajax();
export { ajax };
