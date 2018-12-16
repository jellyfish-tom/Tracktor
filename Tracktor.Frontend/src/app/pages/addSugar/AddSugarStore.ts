import { computedAsync } from "computed-async-mobx";
import { action, computed, observable, reaction } from "mobx";
import autobind from "autobind-decorator";
// import { Api } from "../api/client"

@autobind
export default class AddSugarStore {
  constructor() {
    // private api: Api,
  }

  onChange(value: any, field: any) {
    console.log("FROM STORE!");
    console.log(value, field);
  }
}
