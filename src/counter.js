import React, { useState } from "react";
import {
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
  useRecoilState
} from "recoil";
import { countState, inputState } from "./atom";
import { countStateSelector } from "./selector";

function Counter() {
  const [number, setNumber] = useState(0);

  const currentCount = useRecoilValue(countState); // 읽기 전용!
  const counterHandler = useSetRecoilState(countState); // 값만 변경 시키기
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  const onIncreaseRecoilCount = () => {
    counterHandler((prev) => prev + 1);
  };

  const onDecreaseRecoilCount = () => {
    counterHandler((prev) => prev - 1);
  };

  // 새로 추가된 코드
  // const currentInput = useRecoilValue(inputState);
  // const inputHandlerState = useSetRecoilState(inputState);
  const [inputValue, setInputValue] = useRecoilState(inputState); // 위와같이 따로 쓰지않고 useState처럼 쓸 수 있다.
  const resultValue = useRecoilValue(countStateSelector);

  const inputHandler = (e) => {
    let target = e.target.value;
    setInputValue(target);
  };
  const submitCount = () => counterHandler((pre) => pre + Number(inputValue));

  return (
    <div>
      <div>use useState</div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>

      <div>
        <div>use Recoil state</div>
        <h1>{currentCount}</h1>
        <button onClick={onIncreaseRecoilCount}>+1</button>
        <button onClick={onDecreaseRecoilCount}>-1</button>
        <button onClick={resetCounter}>reset</button>
      </div>

      <div>
        <input type="text" onChange={inputHandler}></input>
        <button onClick={submitCount}>입력값 더하기</button>
        <div>{resultValue}</div>
      </div>
    </div>
  );
}

export default Counter;
