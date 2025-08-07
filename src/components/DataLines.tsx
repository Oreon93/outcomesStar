import React from 'react';
import { DataLinesProps } from '../types';

export const DataLines: React.FC<DataLinesProps> = ({
  centerX,
  centerY,
  outerRadius,
  firstScores,
  latestScores,
  colors,
  maxScore = 10
}) => {
  const scoreToCoordinates = (scores: { category: string, score: number }[]) => {
    return scores.map((item, index) => {
      const angle = (index * Math.PI * 2 / scores.length) - Math.PI / 2;
      const radius = ((item.score + 1) / (maxScore + 1)) * outerRadius;
      return [
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      ];
    });
  };

  const firstCoords = scoreToCoordinates(firstScores);
  const latestCoords = scoreToCoordinates(latestScores);

  const firstPathString = firstCoords.map((point, i) =>
    `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`
  ).join(' ') + ' Z';

  const latestPathString = latestCoords.map((point, i) =>
    `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`
  ).join(' ') + ' Z';

  return (
    <>
      {/* First score line */}
      <path
        d={firstPathString}
        fill="none"
        stroke={colors.first}
        strokeWidth="2"
      />
      
      {/* First score dots */}
      {firstCoords.map((coord, index) => (
        <circle
          key={`first-${index}`}
          cx={coord[0]}
          cy={coord[1]}
          r="4"
          fill={colors.first}
        />
      ))}
      
      {/* Latest score line */}
      <path
        d={latestPathString}
        fill="none"
        stroke={colors.latest}
        strokeWidth="2"
      />
      
      {/* Latest score dots */}
      {latestCoords.map((coord, index) => (
        <circle
          key={`latest-${index}`}
          cx={coord[0]}
          cy={coord[1]}
          r="4"
          fill={colors.latest}
        />
      ))}
    </>
  );
};