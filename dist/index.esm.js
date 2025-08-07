import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React from 'react';

var StarShape = function (_a) {
    var centerX = _a.centerX, centerY = _a.centerY, outerRadius = _a.outerRadius, innerRadius = _a.innerRadius, pointCount = _a.pointCount, _b = _a.fill, fill = _b === void 0 ? "#b8e6b8" : _b, _c = _a.stroke, stroke = _c === void 0 ? "#4a5568" : _c, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 2 : _d;
    var calculateStarPoints = function (centerX, centerY, outerRadius, innerRadius, points) {
        var angleStep = (Math.PI * 2) / points;
        var coords = [];
        for (var i = 0; i < points; i++) {
            // Outer point (peak)
            var outerAngle = i * angleStep - Math.PI / 2;
            coords.push([
                centerX + Math.cos(outerAngle) * outerRadius,
                centerY + Math.sin(outerAngle) * outerRadius
            ]);
            // Inner point (valley)
            var innerAngle = (i + 0.5) * angleStep - Math.PI / 2;
            coords.push([
                centerX + Math.cos(innerAngle) * innerRadius,
                centerY + Math.sin(innerAngle) * innerRadius
            ]);
        }
        return coords;
    };
    var starPoints = calculateStarPoints(centerX, centerY, outerRadius, innerRadius, pointCount);
    var pathString = starPoints.map(function (point, i) {
        return "".concat(i === 0 ? 'M' : 'L', " ").concat(point[0], " ").concat(point[1]);
    }).join(' ') + ' Z';
    return (jsx("path", { d: pathString, fill: fill, stroke: stroke, strokeWidth: strokeWidth }));
};

var ConcentricRings = function (_a) {
    var centerX = _a.centerX, centerY = _a.centerY, outerRadius = _a.outerRadius, pointCount = _a.pointCount, _b = _a.ringCount, ringCount = _b === void 0 ? 10 : _b, _c = _a.strokeColor, strokeColor = _c === void 0 ? "#d1d5db" : _c, _d = _a.maxScore, maxScore = _d === void 0 ? 10 : _d;
    return (jsxs(Fragment, { children: [Array.from({ length: ringCount }, function (_, index) { return index + 1; }).map(function (ringNumber) {
                var radius = ((ringNumber + 1) / (maxScore + 1)) * outerRadius;
                return (jsxs(React.Fragment, { children: [jsx("circle", { cx: centerX, cy: centerY, r: radius, fill: "none", stroke: strokeColor, strokeWidth: "1" }), Array.from({ length: pointCount }).map(function (_, branchIndex) {
                            var angle = (branchIndex * Math.PI * 2 / pointCount) - Math.PI / 2;
                            var textX = centerX + Math.cos(angle) * radius;
                            var textY = centerY + Math.sin(angle) * radius;
                            return (jsxs("g", { children: [jsx("circle", { cx: textX, cy: textY, r: "10", fill: "white", stroke: strokeColor, strokeWidth: "1" }), jsx("text", { x: textX, y: textY + 3, textAnchor: "middle", fontSize: "10", fill: "#374151", fontWeight: "500", children: ringNumber })] }, "".concat(ringNumber, "-").concat(branchIndex)));
                        })] }, ringNumber));
            }), jsx("circle", { cx: centerX, cy: centerY, r: outerRadius / (maxScore + 1), fill: "white", stroke: strokeColor, strokeWidth: "2" })] }));
};

var DataLines = function (_a) {
    var centerX = _a.centerX, centerY = _a.centerY, outerRadius = _a.outerRadius, firstScores = _a.firstScores, latestScores = _a.latestScores, colors = _a.colors, _b = _a.maxScore, maxScore = _b === void 0 ? 10 : _b;
    var scoreToCoordinates = function (scores) {
        return scores.map(function (item, index) {
            var angle = (index * Math.PI * 2 / scores.length) - Math.PI / 2;
            var radius = ((item.score + 1) / (maxScore + 1)) * outerRadius;
            return [
                centerX + Math.cos(angle) * radius,
                centerY + Math.sin(angle) * radius
            ];
        });
    };
    var firstCoords = scoreToCoordinates(firstScores);
    var latestCoords = scoreToCoordinates(latestScores);
    var firstPathString = firstCoords.map(function (point, i) {
        return "".concat(i === 0 ? 'M' : 'L', " ").concat(point[0], " ").concat(point[1]);
    }).join(' ') + ' Z';
    var latestPathString = latestCoords.map(function (point, i) {
        return "".concat(i === 0 ? 'M' : 'L', " ").concat(point[0], " ").concat(point[1]);
    }).join(' ') + ' Z';
    return (jsxs(Fragment, { children: [jsx("path", { d: firstPathString, fill: "none", stroke: colors.first, strokeWidth: "2" }), firstCoords.map(function (coord, index) { return (jsx("circle", { cx: coord[0], cy: coord[1], r: "4", fill: colors.first }, "first-".concat(index))); }), jsx("path", { d: latestPathString, fill: "none", stroke: colors.latest, strokeWidth: "2" }), latestCoords.map(function (coord, index) { return (jsx("circle", { cx: coord[0], cy: coord[1], r: "4", fill: colors.latest }, "latest-".concat(index))); })] }));
};

var CategoryLabels = function (_a) {
    var centerX = _a.centerX, centerY = _a.centerY, outerRadius = _a.outerRadius, categories = _a.categories, _b = _a.fontSize, fontSize = _b === void 0 ? 11 : _b, _c = _a.textColor, textColor = _c === void 0 ? "#374151" : _c;
    return (jsx(Fragment, { children: categories.map(function (label, index) {
            var angle = (index * Math.PI * 2 / categories.length) - Math.PI / 2;
            var labelRadius = outerRadius + 40; // Increased distance from star
            var textX = centerX + Math.cos(angle) * labelRadius;
            var textY = centerY + Math.sin(angle) * labelRadius;
            // Split long labels into multiple lines
            var words = label.split(' ');
            var lines = [];
            var currentLine = '';
            words.forEach(function (word) {
                if (currentLine.length + word.length + 1 <= 15) { // Max 15 characters per line
                    currentLine += (currentLine ? ' ' : '') + word;
                }
                else {
                    if (currentLine)
                        lines.push(currentLine);
                    currentLine = word;
                }
            });
            if (currentLine)
                lines.push(currentLine);
            return (jsx("g", { children: lines.map(function (line, lineIndex) { return (jsx("text", { x: textX, y: textY + (lineIndex - (lines.length - 1) / 2) * 12, textAnchor: "middle", dominantBaseline: "middle", fontSize: fontSize, fill: textColor, fontWeight: "500", children: line }, "".concat(index, "-").concat(lineIndex))); }) }, "label-".concat(index)));
        }) }));
};

var Legend = function (_a) {
    var centerX = _a.centerX, y = _a.y, labels = _a.labels, colors = _a.colors;
    return (jsxs("g", { transform: "translate(".concat(centerX - 100, ", ").concat(y, ")"), children: [jsx("circle", { cx: "0", cy: "0", r: "5", fill: colors.first }), jsx("text", { x: "15", y: "0", dominantBaseline: "middle", fontSize: "12", fill: "#374151", children: labels.first }), jsx("circle", { cx: "165", cy: "0", r: "5", fill: colors.latest }), jsx("text", { x: "180", y: "0", dominantBaseline: "middle", fontSize: "12", fill: "#374151", children: labels.latest })] }));
};

var StarDiagram = function (_a) {
    var firstScores = _a.firstScores, latestScores = _a.latestScores, _b = _a.width, width = _b === void 0 ? 600 : _b, _c = _a.height, height = _c === void 0 ? 700 : _c, _d = _a.colors, colors = _d === void 0 ? {
        first: "#f97316",
        latest: "#22c55e",
        star: "#b8e6b8",
        rings: "#d1d5db"
    } : _d, _e = _a.labels, labels = _e === void 0 ? {
        first: "First Dataset",
        latest: "Latest Dataset"
    } : _e, _f = _a.maxScore, maxScore = _f === void 0 ? 10 : _f;
    // Validation
    if (firstScores.length !== latestScores.length) {
        throw new Error('First and latest scores must have the same number of categories');
    }
    if (firstScores.length < 3) {
        throw new Error('Star diagram requires at least 3 categories');
    }
    var pointCount = firstScores.length;
    var centerX = width / 2;
    var centerY = (height - 120) / 2 + 60; // Account for legend space + top padding for labels
    var outerRadius = Math.min(width - 120, height - 200) * 0.5; // Reduced size to leave room for labels
    var innerRadius = outerRadius * 0.5;
    var categories = firstScores.map(function (item) { return item.category; });
    return (jsx("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#f9fafb'
        }, children: jsx("div", { style: {
                width: "100%",
                height: "100%",
                textAlign: 'center'
            }, children: jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 ".concat(width, " ").concat(height), style: {
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white',
                    maxWidth: "".concat(width, "px"),
                    maxHeight: "".concat(height, "px")
                }, children: [jsx(StarShape, { centerX: centerX, centerY: centerY, outerRadius: outerRadius, innerRadius: innerRadius, pointCount: pointCount, fill: colors.star }), jsx(ConcentricRings, { centerX: centerX, centerY: centerY, outerRadius: outerRadius, pointCount: pointCount, ringCount: maxScore, strokeColor: colors.rings, maxScore: maxScore }), jsx(DataLines, { centerX: centerX, centerY: centerY, outerRadius: outerRadius, firstScores: firstScores, latestScores: latestScores, colors: {
                            first: colors.first,
                            latest: colors.latest
                        }, maxScore: maxScore }), jsx(CategoryLabels, { centerX: centerX, centerY: centerY, outerRadius: outerRadius, categories: categories }), jsx(Legend, { centerX: centerX, y: height - 30, labels: labels, colors: {
                            first: colors.first,
                            latest: colors.latest
                        } })] }) }) }));
};

var TestComponent = function () {
    return React.createElement('div', null, 'Hello World');
};

export { CategoryLabels, ConcentricRings, DataLines, Legend, StarDiagram, StarShape, TestComponent };
//# sourceMappingURL=index.esm.js.map
