import { promiseSetRecoil, promiseGetRecoil } from "recoil-outside";
import { externalTestState } from "./atom";

export const setTest = async () => {
  await promiseSetRecoil(externalTestState, "Success");
};

export const getTest = async () => {
  const value = await promiseGetRecoil(externalTestState);
  return value;
};

setTest();
