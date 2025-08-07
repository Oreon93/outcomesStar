import React from 'react';
import { CategoryLabelsProps } from '../types';

export const CategoryLabels: React.FC<CategoryLabelsProps> = ({
  centerX,
  centerY,
  outerRadius,
  categories,
  fontSize = 11,
  textColor = "#374151"
}) => {
  return (
    <>
      {categories.map((label, index) => {
        const angle = (index * Math.PI * 2 / categories.length) - Math.PI / 2;
        const labelRadius = outerRadius + 40; // Increased distance from star
        const textX = centerX + Math.cos(angle) * labelRadius;
        const textY = centerY + Math.sin(angle) * labelRadius;

        // Split long labels into multiple lines
        const words = label.split(' ');
        const lines = [];
        let currentLine = '';
        
        words.forEach(word => {
          if (currentLine.length + word.length + 1 <= 15) { // Max 15 characters per line
            currentLine += (currentLine ? ' ' : '') + word;
          } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
          }
        });
        if (currentLine) lines.push(currentLine);

        return (
          <g key={`label-${index}`}>
            {lines.map((line, lineIndex) => (
              <text
                key={`${index}-${lineIndex}`}
                x={textX}
                y={textY + (lineIndex - (lines.length - 1) / 2) * 12} // Center multi-line text
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize}
                fill={textColor}
                fontWeight="500"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </>
  );
};