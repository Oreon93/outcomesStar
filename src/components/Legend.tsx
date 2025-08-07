import React from 'react';
import { LegendProps } from '../types';

export const Legend: React.FC<LegendProps> = ({
  centerX,
  y,
  labels,
  colors
}) => {
  return (
    <g transform={`translate(${centerX - 100}, ${y})`}>
      {/* First Star legend item */}
      <circle cx="0" cy="0" r="5" fill={colors.first} />
      <text x="15" y="0" dominantBaseline="middle" fontSize="12" fill="#374151">
        {labels.first}
      </text>
      
      {/* Second Star legend item */}
      <circle cx="165" cy="0" r="5" fill={colors.latest} />
      <text x="180" y="0" dominantBaseline="middle" fontSize="12" fill="#374151">
        {labels.latest}
      </text>
    </g>
  );
};