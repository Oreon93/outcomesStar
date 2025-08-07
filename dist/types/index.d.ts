export interface ScoreData {
    category: string;
    score: number;
}
export interface StarDiagramProps {
    firstScores: ScoreData[];
    latestScores: ScoreData[];
    width?: number;
    height?: number;
    colors?: {
        first: string;
        latest: string;
        star: string;
        rings: string;
    };
    labels?: {
        first: string;
        latest: string;
    };
    maxScore?: number;
}
export interface StarShapeProps {
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    pointCount: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}
export interface ConcentricRingsProps {
    centerX: number;
    centerY: number;
    outerRadius: number;
    pointCount: number;
    ringCount?: number;
    strokeColor?: string;
    maxScore?: number;
}
export interface DataLinesProps {
    centerX: number;
    centerY: number;
    outerRadius: number;
    firstScores: ScoreData[];
    latestScores: ScoreData[];
    colors: {
        first: string;
        latest: string;
    };
    maxScore?: number;
}
export interface CategoryLabelsProps {
    centerX: number;
    centerY: number;
    outerRadius: number;
    categories: string[];
    fontSize?: number;
    textColor?: string;
}
export interface LegendProps {
    centerX: number;
    y: number;
    labels: {
        first: string;
        latest: string;
    };
    colors: {
        first: string;
        latest: string;
    };
}
