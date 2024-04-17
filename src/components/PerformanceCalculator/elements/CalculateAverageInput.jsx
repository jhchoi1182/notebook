import { useState } from "react";

export default function CalculateAverageInput() {
  const [input, setInput] = useState("");
  const [average, setAverage] = useState(0);

  const numbersCount = input.split(", ").filter((n) => !isNaN(Number(n)) && n !== "").length;

  const calculateAverage = () => {
    const numbers = input
      .split(", ")
      .map(Number)
      .filter((n) => !isNaN(n));
    if (numbers.length <= 0) {
      alert("최소 1개 이상의 숫자를 입력해주세요.");
      return;
    }

    // 평균 계산
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    setAverage(avg);
  };

  return (
    <div>
      <h2>평균값 구하기</h2>
      <input style={{ width: "400px" }} type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="숫자들을 입력하세요 (예: 23.34, 21.5, ...)" />
      <button onClick={calculateAverage}>평균 계산</button>
      {average !== null && <p>계산된 평균: {average.toFixed(2)}</p>}
      <p>입력된 숫자 개수: {numbersCount}</p>
    </div>
  );
}
