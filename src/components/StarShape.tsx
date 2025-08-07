import React from 'react';
import { StarShapeProps } from '../types';

export const StarShape: React.FC<StarShapeProps> = ({
  centerX,
  centerY,
  outerRadius,
  innerRadius,
  pointCount,
  fill = "#b8e6b8",
  stroke = "#4a5568",
  strokeWidth = 2
}) => {
  const calculateStarPoints = (
    centerX: number,
    centerY: number,
    outerRadius: number,
    innerRadius: number,
    points: number
  ): number[][] => {
    const angleStep = (Math.PI * 2) / points;
    const coords = [];

    for (let i = 0; i < points; i++) {
      // Outer point (peak)
      const outerAngle = i * angleStep - Math.PI / 2;
      coords.push([
        centerX + Math.cos(outerAngle) * outerRadius,
        centerY + Math.sin(outerAngle) * outerRadius
      ]);

      // Inner point (valley)
      const innerAngle = (i + 0.5) * angleStep - Math.PI / 2;
      coords.push([
        centerX + Math.cos(innerAngle) * innerRadius,
        centerY + Math.sin(innerAngle) * innerRadius
      ]);
    }

    return coords;
  };

  const starPoints = calculateStarPoints(centerX, centerY, outerRadius, innerRadius, pointCount);
  const pathString = starPoints.map((point, i) =>
    `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`
  ).join(' ') + ' Z';

  return (
    <path
      d={pathString}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};