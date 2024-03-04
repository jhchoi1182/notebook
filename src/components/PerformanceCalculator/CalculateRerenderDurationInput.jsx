import React from "react";
import { useState } from "react";

export default function CalculateRerenderDurationInput() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [difference, setDifference] = useState(0);

  const handleCalculateDifference = () => {
    const diff = Number(number1) - Number(number2);
    setDifference(diff);
  };

  return (
    <div>
      <h2>리렌더링 계산</h2>
      <input type="text" value={number1} onChange={(e) => setNumber1(+e.target.value)} placeholder="firstStartTime" />
      <input type="text" value={number2} onChange={(e) => setNumber2(+e.target.value)} placeholder="lastCommitTime" />
      <button onClick={handleCalculateDifference}>차이 계산</button>
      {difference !== null && <p>리렌더링 소요 시간: {difference}</p>}
    </div>
  );
}
