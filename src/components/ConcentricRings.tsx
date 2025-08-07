import React from 'react';
import { ConcentricRingsProps } from '../types';

export const ConcentricRings: React.FC<ConcentricRingsProps> = ({
  centerX,
  centerY,
  outerRadius,
  pointCount,
  ringCount = 10,
  strokeColor = "#d1d5db",
  maxScore = 10
}) => {
  return (
    <>
      {Array.from({ length: ringCount }, (_, index) => index + 1).map(ringNumber => {
        const radius = ((ringNumber + 1) / (maxScore + 1)) * outerRadius;
        return (
          <React.Fragment key={ringNumber}>
            {/* Ring circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
            />
            {/* Numbers on each of the star branches */}
            {Array.from({ length: pointCount }).map((_, branchIndex) => {
              const angle = (branchIndex * Math.PI * 2 / pointCount) - Math.PI / 2;
              const textX = centerX + Math.cos(angle) * radius;
              const textY = centerY + Math.sin(angle) * radius;

              return (
                <g key={`${ringNumber}-${branchIndex}`}>
                  {/* White circle background for number */}
                  <circle
                    cx={textX}
                    cy={textY}
                    r="10"
                    fill="white"
                    stroke={strokeColor}
                    strokeWidth="1"
                  />
                  {/* Number text */}
                  <text
                    x={textX}
                    y={textY + 3}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#374151"
                    fontWeight="500"
                  >
                    {ringNumber}
                  </text>
                </g>
              );
            })}
          </React.Fragment>
        );
      })}
      
      {/* Center blank circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={outerRadius / (maxScore + 1)}
        fill="white"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </>
  );
};