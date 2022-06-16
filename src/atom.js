import { atom } from "recoil";

let countState = atom({
  key: "counter",
  default: 4
});

let externalTestState = atom({
  key: "externalTestState",
  default: "nothing"
});

let inputState = atom({
  key: "input",
  default: 0
});

export { countState, inputState, externalTestState };
