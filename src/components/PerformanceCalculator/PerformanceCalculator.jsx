import React from "react";
import CalculateAverageInput from "./elements/CalculateAverageInput";
import OutlierExcludedAverageInput from "./elements/OutlierExcludedAverageInput";
import CalculateRerenderDurationInput from "./elements/CalculateRerenderDurationInput";
import PerformanceImprovementInput from "./elements/PerformanceImprovementInput";

export default function PerformanceCalculator() {
  return (
    <div>
      <CalculateAverageInput />
      <OutlierExcludedAverageInput />
      <CalculateRerenderDurationInput />
      <PerformanceImprovementInput />
    </div>
  );
}
