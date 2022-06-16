import { getRecoil, setRecoil } from "recoil-nexus";
import { externalTestState } from "./atom";

export const toggleState = async () => {
  //const loading = await getRecoil(externalTestState);
  setRecoil(externalTestState, "success");
};
