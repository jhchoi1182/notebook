import React from "react";
import { useState } from "react";

export default function CalculateRerenderDurationInput() {
  const [firstStartTime, setFirstStartTime] = useState("");
  const [lastCommitTime, setLastCommitTime] = useState("");
  const [difference, setDifference] = useState(0);

  const handleCalculateDifference = () => {
    const diff = Number(lastCommitTime) - Number(firstStartTime);
    setDifference(diff);
  };

  return (
    <div>
      <h2>리렌더링 계산</h2>
      <input type="text" value={firstStartTime} onChange={(e) => setFirstStartTime(+e.target.value)} placeholder="firstStartTime" />
      <input type="text" value={lastCommitTime} onChange={(e) => setLastCommitTime(+e.target.value)} placeholder="lastCommitTime" />
      <button onClick={handleCalculateDifference}>차이 계산</button>
      {difference !== null && <p>리렌더링 소요 시간: {difference}</p>}
    </div>
  );
}
