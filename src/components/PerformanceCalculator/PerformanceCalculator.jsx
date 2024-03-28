import React from "react";
import CalculateAverageInput from "./CalculateAverageInput";
import OutlierExcludedAverageInput from "./OutlierExcludedAverageInput";
import CalculateRerenderDurationInput from "./CalculateRerenderDurationInput";

export default function PerformanceCalculator() {
  return (
    <div>
      <CalculateAverageInput />
      <OutlierExcludedAverageInput />
      <CalculateRerenderDurationInput />
    </div>
  );
}
