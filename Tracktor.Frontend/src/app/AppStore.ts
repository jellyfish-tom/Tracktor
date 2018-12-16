import { computedAsync } from "computed-async-mobx";
import { action, computed, observable, reaction } from "mobx";
import autobind from "autobind-decorator";
// import { Api } from "../api/client"
import AddSugarStore from "./pages/addSugar/AddSugarStore";

//TODO: change architecture of stores
@autobind
export default class AppStore {
  addSugarStore: AddSugarStore;

  constructor() {
    this.addSugarStore = new AddSugarStore();
  }
}
