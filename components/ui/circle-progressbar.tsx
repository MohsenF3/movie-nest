"use client";

import { percent } from "@/lib/utils";
import React from "react";

export default function CircleProgress({ rate }: { rate: number }) {
  const progress = React.useMemo(() => percent(rate), [rate]);

  // function to determine the color of the progress circle based on the rate.
  const getColor = (rate: number) => {
    if (rate >= 80) {
      return "#10b981"; // Green for rates 80% and above.
    } else if (rate >= 85) {
      return "#38bdf8"; // Light Blue for rates 85% and above.
    } else if (rate >= 70) {
      return "#4ade80"; // Light Green for rates 70% and above.
    } else if (rate >= 50) {
      return "#fb923c"; // Orange for rates 50% and above.
    } else {
      return "#f43f5e"; // Red for rates below 50%.
    }
  };

  const radius = 30;
  const strokeWidth = 5;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (progress / 100) * circumference;
  const color = getColor(progress);

  return (
    <div className="relative" style={{ width: "60px", height: "60px" }}>
      <svg width="100%" height="100%" className="">
        {/* Background trail */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="transparent"
          strokeWidth={strokeWidth}
        />
        {/* Progress path */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
        />
      </svg>
      <span
        className="absolute left-1/2 top-1/2 font-bold"
        style={{
          color,
          transform: "translate(-50%, -50%)",
        }}
      >
        {progress}%
      </span>
    </div>
  );
}
