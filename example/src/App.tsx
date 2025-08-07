import React from 'react';
import { StarDiagram } from 'react-star-diagram';
import './App.css';

const App: React.FC = () => {
  const firstScores = [
    { category: "Managing mental health", score: 5 },
    { category: "Physical health", score: 7 },
    { category: "Living skills", score: 3 },
    { category: "Friends and community", score: 8 },
    { category: "Use of time", score: 6 },
    { category: "Relationships", score: 4 },
    { category: "Addictive behaviour", score: 9 },
    { category: "Home", score: 2 },
    { category: "Identity and self-esteem", score: 7 },
    { category: "Trust and hope", score: 5 }
  ];

  const latestScores = [
    { category: "Managing mental health", score: 8 },
    { category: "Physical health", score: 6 },
    { category: "Living skills", score: 7 },
    { category: "Friends and community", score: 9 },
    { category: "Use of time", score: 8 },
    { category: "Relationships", score: 7 },
    { category: "Addictive behaviour", score: 6 },
    { category: "Home", score: 5 },
    { category: "Identity and self-esteem", score: 8 },
    { category: "Trust and hope", score: 9 }
  ];

  // Example with different number of categories
  const simpleScores = [
    { category: "Quality", score: 8 },
    { category: "Price", score: 6 },
    { category: "Service", score: 9 },
    { category: "Speed", score: 7 },
    { category: "Support", score: 8 }
  ];

  const simpleLatest = [
    { category: "Quality", score: 9 },
    { category: "Price", score: 7 },
    { category: "Service", score: 8 },
    { category: "Speed", score: 8 },
    { category: "Support", score: 9 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Outcomes Star Example</h1>
        <p>A customizable star diagram for visualizing multi-dimensional data</p>
      </header>
      
      <main>
        <section style={{ margin: '2rem 0' }}>
          <h2>10-Point Star</h2>
          <div style={{ width: '100%', height: '600px' }}>
            <StarDiagram 
              firstScores={firstScores}
              latestScores={latestScores}
            />
          </div>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>5-Point Star with Custom Colors & Labels</h2>
          <div style={{ width: '100%', height: '600px' }}>
            <StarDiagram 
              firstScores={simpleScores}
              latestScores={simpleLatest}
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
          </div>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>Custom Scoring Scale (1-5)</h2>
          <div style={{ width: '100%', height: '600px' }}>
            <StarDiagram 
              firstScores={[
                { category: "Taste", score: 3 },
                { category: "Presentation", score: 4 },
                { category: "Service", score: 2 },
                { category: "Value", score: 5 },
                { category: "Ambiance", score: 3 },
                { category: "Location", score: 4 }
              ]}
              latestScores={[
                { category: "Taste", score: 4 },
                { category: "Presentation", score: 5 },
                { category: "Service", score: 4 },
                { category: "Value", score: 4 },
                { category: "Ambiance", score: 5 },
                { category: "Location", score: 4 }
              ]}
              maxScore={5}
              colors={{
                first: "#e74c3c",
                latest: "#2ecc71",
                star: "#ecf0f1",
                rings: "#bdc3c7"
              }}
              labels={{
                first: "Previous Visit",
                latest: "Recent Visit"
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;