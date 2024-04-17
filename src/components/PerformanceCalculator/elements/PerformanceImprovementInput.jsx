import React, { useState } from "react";

export default function PerformanceImprovementInput() {
  const [beforeTime, setBeforeTime] = useState("");
  const [afterTime, setAfterTime] = useState("");
  const [improvementPercentage, setImprovementPercentage] = useState(0);

  const handleCalculateImprovement = () => {
    if (beforeTime > 0 && afterTime > 0) {
      const improvement = ((beforeTime - afterTime) / beforeTime) * 100;
      setImprovementPercentage(improvement.toFixed(2));
    } else {
      alert("성능 값은 0보다 커야 합니다.");
    }
  };

  return (
    <div>
      <h2>성능 개선 계산</h2>
      <input type="text" value={beforeTime} onChange={(e) => setBeforeTime(+e.target.value)} placeholder="이전 성능 (ms)" />
      <input type="text" value={afterTime} onChange={(e) => setAfterTime(+e.target.value)} placeholder="개선된 성능 (ms)" />
      <button onClick={handleCalculateImprovement}>향상 % 계산</button>
      {improvementPercentage !== null && <p>성능 향상률: {improvementPercentage}%</p>}
    </div>
  );
}
