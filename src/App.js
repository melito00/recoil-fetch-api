import React, { Suspense } from "react";
import "./styles.css";
import { useRecoilValue } from "recoil";
import { countState } from "./atom";
import Counter from "./counter";
import { FetchData, DetailsWithoutSuspense } from "./fetchData";
import ExternalState from "./external";

export default function App() {
  const currentCount = useRecoilValue(countState); // 읽기 전용!
  return (
    <div className="App">
      <div>{currentCount}</div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Counter /> */}
      {/* <ExternalState />*/}
      <DetailsWithoutSuspense />
      <Suspense fallback={<div>Loading...</div>}>
        <FetchData />
      </Suspense>
    </div>
  );
}
