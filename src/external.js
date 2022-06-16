import React from "react";
import { useRecoilValue } from "recoil";
import { externalTestState } from "./atom";
import { toggleState } from "./interceptor";

function ExternalState() {
  const externalState = useRecoilValue(externalTestState);

  return (
    <div>
      <div>External State</div>
      <button onClick={toggleState}>button</button>

      <h1>{externalState}</h1>
    </div>
  );
}

export default ExternalState;
