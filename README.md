# React Star Diagram

A customizable, responsive star diagram component for React to visualize multi-dimensional data. Perfect for displaying comparative metrics, survey results, or any data with multiple categories.

![Star Diagram Example](/example/example.png)

## Features

**Fully Customizable** - Colors, sizes, labels, and styling  
**Multi-Dataset Support** - Compare two sets of data
**Responsive** - Works on all screen sizes  

## Installation

```bash
npm install react-star-diagram
```

```bash
yarn add react-star-diagram
```

## Quick Start

```tsx
import React from 'react';
import { StarDiagram } from 'react-star-diagram';

const App = () => {
  const firstScores = [
    { category: "Health", score: 8 },
    { category: "Happiness", score: 7 },
    { category: "Relationships", score: 9 },
    { category: "Career", score: 6 },
    { category: "Finances", score: 5 },
    { category: "Learning", score: 8 },
    { category: "Creativity", score: 7 },
    { category: "Community", score: 6 },
    { category: "Environment", score: 8 },
    { category: "Spirituality", score: 7 }
  ];

  const latestScores = [
    { category: "Health", score: 9 },
    { category: "Happiness", score: 8 },
    { category: "Relationships", score: 8 },
    { category: "Career", score: 8 },
    { category: "Finances", score: 7 },
    { category: "Learning", score: 9 },
    { category: "Creativity", score: 8 },
    { category: "Community", score: 7 },
    { category: "Environment", score: 9 },
    { category: "Spirituality", score: 8 }
  ];

  return (
    <StarDiagram 
      firstScores={firstScores}
      latestScores={latestScores}
    />
  );
};
```

## API Reference

### StarDiagram Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `firstScores` | `ScoreData[]` | **Required** | First dataset to display |
| `latestScores` | `ScoreData[]` | **Required** | Second dataset to display |
| `width` | `number` | `500` | SVG width in pixels |
| `height` | `number` | `600` | SVG height in pixels |
| `colors` | `ColorConfig` | See below | Color configuration object |
| `labels` | `LabelConfig` | See below | Legend label configuration |

### ScoreData Interface

```tsx
interface ScoreData {
  category: string;  // Category name (will be displayed as label)
  score: number;     // Score value (1-10)
}
```

### ColorConfig Interface

```tsx
interface ColorConfig {
  first: string;     // Color for first dataset line/dots
  latest: string;    // Color for latest dataset line/dots  
  star: string;      // Star shape fill color
  rings: string;     // Concentric rings stroke color
}
```

**Default colors:**
```tsx
{
  first: "#f97316",    // Orange
  latest: "#22c55e",   // Green
  star: "#b8e6b8",     // Light green
  rings: "#d1d5db"     // Light gray
}
```

### LabelConfig Interface

```tsx
interface LabelConfig {
  first: string;   // Legend label for first dataset
  latest: string;  // Legend label for latest dataset
}
```

**Default labels:**
```tsx
{
  first: "E1: 1st Star - Collaborative",
  latest: "E1: 2nd Star - Collaborative"
}
```

## Advanced Usage

### Custom Styling

```tsx
<StarDiagram
  firstScores={data1}
  latestScores={data2}
  width={700}
  height={700}
  colors={{
    first: "#ff6b35",
    latest: "#4ecdc4", 
    star: "#f7f7f7",
    rings: "#cccccc"
  }}
  labels={{
    first: "Initial Assessment",
    latest: "Current Status"
  }}
/>
```

### Using Individual Components

You can also use the individual components for more control:

```tsx
import { 
  StarShape, 
  ConcentricRings, 
  DataLines, 
  CategoryLabels, 
  Legend 
} from 'react-star-diagram';

const CustomStarDiagram = () => {
  const centerX = 250;
  const centerY = 250;
  const outerRadius = 200;
  const innerRadius = 100;

  return (
    <svg width="500" height="500">
      <StarShape 
        centerX={centerX}
        centerY={centerY}
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        fill="#e6f3ff"
      />
      <ConcentricRings
        centerX={centerX}
        centerY={centerY}
        outerRadius={outerRadius}
      />
      {/* Add other components as needed */}
    </svg>
  );
};
```

## Data Requirements

- **Exactly 10 categories**: The star diagram is designed for 10-point data
- **Score range**: Scores should be between 1-10 (inclusive)
- **Matching categories**: Both datasets should have the same categories in the same order

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

```bash
# Clone the repository
git clone https://github.com/Oreon93/outcomesStar.git
cd outcomesStar

# Install dependencies
npm install

# Start development mode
npm run dev

# Run the example
npm run example

# Build for production
npm run build

# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## License

MIT © [Your Name](https://github.com/yourusername)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for details about changes in each version.