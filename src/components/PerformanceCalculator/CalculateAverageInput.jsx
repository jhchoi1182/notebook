import React from 'react'
import { useState } from "react";

export default function CalculateAverageInput() {
  const [input, setInput] = useState("");
  const [average, setAverage] = useState(0);

  const handleCalculate = () => {
    const numbers = input
      .split(", ")
      .map(Number)
      .filter((n) => !isNaN(n));
    if (numbers.length <= 2) {
      alert("최소 3개 이상의 숫자를 입력해주세요.");
      return;
    }

    // 최대값과 최소값을 제거
    const maxVal = Math.max(...numbers);
    const minVal = Math.min(...numbers);
    const filteredNumbers = numbers.filter((n) => n !== maxVal && n !== minVal);

    // 평균 계산
    const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / filteredNumbers.length;
    setAverage(avg);
  };

  return (
    <div>
      <h2>이상치를 제외한 평균값 구하기</h2>
      <input style={{ width: "400px" }} type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="숫자들을 입력하세요 (예: 23.34, 21.5, ...)" />
      <button onClick={handleCalculate}>평균 계산</button>
      {average !== null && <p>계산된 평균: {average.toFixed(2)}</p>}
    </div>
  );
}
