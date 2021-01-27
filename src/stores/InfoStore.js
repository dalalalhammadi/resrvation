import { makeObservable, observable } from "mobx";

// import instance from "./instance";

class InfoStore {
  info = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      info: observable,
      loading: observable,
    });
  }
}
const infoStore = new InfoStore();

export default infoStore;
