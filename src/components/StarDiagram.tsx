// StarDiagram.tsx
import React from 'react';
import { StarDiagramProps } from '../types';
import { StarShape } from './StarShape';
import { ConcentricRings } from './ConcentricRings';
import { DataLines } from './DataLines';
import { CategoryLabels } from './CategoryLabels';
import { Legend } from './Legend';

export const StarDiagram: React.FC<StarDiagramProps> = ({
  firstScores,
  latestScores,
  width = 600,
  height = 700,
  colors = {
    first: "#f97316",
    latest: "#22c55e",
    star: "#b8e6b8",
    rings: "#d1d5db"
  },
  labels = {
    first: "First Dataset",
    latest: "Latest Dataset"
  },
  maxScore = 10
}) => {
  // Validation
  if (firstScores.length !== latestScores.length) {
    throw new Error('First and latest scores must have the same number of categories');
  }

  if (firstScores.length < 3) {
    throw new Error('Star diagram requires at least 3 categories');
  }

  const pointCount = firstScores.length;
  const centerX = width / 2;
  const centerY = (height - 120) / 2 + 60; // Account for legend space + top padding for labels
  const outerRadius = Math.min(width - 120, height - 200) * 0.5; // Reduced size to leave room for labels
  const innerRadius = outerRadius * 0.5;

  const categories = firstScores.map(item => item.category);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ 
        width: "100%", 
        height: "100%", 
        textAlign: 'center'
      }}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${width} ${height}`}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            maxWidth: `${width}px`,
            maxHeight: `${height}px`
          }}
        >
          <StarShape
            centerX={centerX}
            centerY={centerY}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            pointCount={pointCount}
            fill={colors.star}
          />
          
          <ConcentricRings
            centerX={centerX}
            centerY={centerY}
            outerRadius={outerRadius}
            pointCount={pointCount}
            ringCount={maxScore}
            strokeColor={colors.rings}
            maxScore={maxScore}
          />
          
          <DataLines
            centerX={centerX}
            centerY={centerY}
            outerRadius={outerRadius}
            firstScores={firstScores}
            latestScores={latestScores}
            colors={{
              first: colors.first,
              latest: colors.latest
            }}
            maxScore={maxScore}
          />
          
          <CategoryLabels
            centerX={centerX}
            centerY={centerY}
            outerRadius={outerRadius}
            categories={categories}
          />
          
          <Legend
            centerX={centerX}
            y={height - 30}
            labels={labels}
            colors={{
              first: colors.first,
              latest: colors.latest
            }}
          />
        </svg>
      </div>
    </div>
  );
};