import React from "react";
import CalculateAverageInput from "./CalculateAverageInput";
import CalculateRerenderDurationInput from "./CalculateRerenderDurationInput";

export default function PerformanceCalculator() {
  return (
    <div>
      <CalculateAverageInput />
      <CalculateRerenderDurationInput />
    </div>
  );
}
