// selector.js
import { selector } from "recoil";
import { countState, inputState } from "./atom";
import axios from "axios";

const countStateSelector = selector({
  key: "CountState",

  get: ({ get }) => {
    const inputVal = get(inputState);
    const count = get(countState);

    return `추가된 카운트는 ${inputVal}이고, 현재 카운트는 ${count}입니다.`;
  }
});

const url = `https://reqres.in/api/users?page=1`;
const fetchUserData = selector({
  key: "userSelector",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
});

export { countStateSelector, fetchUserData };
