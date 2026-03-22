'use client';

import styles from './NeuralPulse.module.css';

interface PathData {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlX1: number;
  controlY1: number;
  controlX2: number;
  controlY2: number;
}

const clusters: {
  origin: string;
  paths: (PathData & { delay: number; duration: number })[];
}[] = [
  {
    origin: 'topLeft',
    paths: [
      { startX: 0, startY: 0, endX: 25, endY: 15, controlX1: 12, controlY1: 3, controlX2: 18, controlY2: 12, delay: 0, duration: 4 },
      { startX: 0, startY: 8, endX: 20, endY: 20, controlX1: 10, controlY1: 0, controlX2: 15, controlY2: 18, delay: 1.5, duration: 5 },
      { startX: 0, startY: 0, endX: 12, endY: 28, controlX1: 6, controlY1: 10, controlX2: 3, controlY2: 20, delay: 0.8, duration: 4.5 },
    ],
  },
  {
    origin: 'topRight',
    paths: [
      { startX: 100, startY: 0, endX: 75, endY: 15, controlX1: 88, controlY1: 3, controlX2: 82, controlY2: 12, delay: 2.5, duration: 4.2 },
      { startX: 100, startY: 8, endX: 80, endY: 20, controlX1: 90, controlY1: 0, controlX2: 85, controlY2: 18, delay: 0.4, duration: 5.2 },
      { startX: 100, startY: 0, endX: 88, endY: 28, controlX1: 94, controlY1: 10, controlX2: 97, controlY2: 20, delay: 1.9, duration: 4.8 },
    ],
  },
  {
    origin: 'bottomLeft',
    paths: [
      { startX: 0, startY: 100, endX: 25, endY: 85, controlX1: 12, controlY1: 97, controlX2: 18, controlY2: 88, delay: 3.2, duration: 5 },
      { startX: 0, startY: 92, endX: 20, endY: 80, controlX1: 10, controlY1: 100, controlX2: 15, controlY2: 82, delay: 1.1, duration: 4.3 },
      { startX: 0, startY: 100, endX: 12, endY: 72, controlX1: 6, controlY1: 90, controlX2: 3, controlY2: 80, delay: 0.6, duration: 5.5 },
    ],
  },
  {
    origin: 'bottomRight',
    paths: [
      { startX: 100, startY: 100, endX: 75, endY: 85, controlX1: 88, controlY1: 97, controlX2: 82, controlY2: 88, delay: 2.8, duration: 4.6 },
      { startX: 100, startY: 92, endX: 80, endY: 80, controlX1: 90, controlY1: 100, controlX2: 85, controlY2: 82, delay: 1.7, duration: 5.1 },
      { startX: 100, startY: 100, endX: 88, endY: 72, controlX1: 94, controlY1: 90, controlX2: 97, controlY2: 80, delay: 0.2, duration: 4.9 },
    ],
  },
];

const nodePositions = [
  { x: 0, y: 0, delay: 0, origin: 'topLeft' },
  { x: 0, y: 8, delay: 0.6, origin: 'topLeft' },
  { x: 100, y: 0, delay: 0.3, origin: 'topRight' },
  { x: 100, y: 8, delay: 1.8, origin: 'topRight' },
  { x: 0, y: 100, delay: 0.9, origin: 'bottomLeft' },
  { x: 0, y: 92, delay: 2.5, origin: 'bottomLeft' },
  { x: 100, y: 100, delay: 1.5, origin: 'bottomRight' },
  { x: 100, y: 92, delay: 3.0, origin: 'bottomRight' },
];

function buildPath(p: PathData): string {
  return `M${p.startX},${p.startY} C${p.controlX1},${p.controlY1} ${p.controlX2},${p.controlY2} ${p.endX},${p.endY}`;
}

export default function NeuralPulse() {
  return (
    <div className={styles.container} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="npGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="nodeRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(81,217,254,1)" />
            <stop offset="60%" stopColor="rgba(81,217,254,0.4)" />
            <stop offset="100%" stopColor="rgba(81,217,254,0)" />
          </radialGradient>
        </defs>

        {clusters.map((cluster) =>
          cluster.paths.map((path, i) => (
            <g key={`${cluster.origin}-${i}`}>
              <path
                d={buildPath(path)}
                stroke="rgba(81,217,254,0.12)"
                strokeWidth="0.15"
                fill="none"
              />
              <path
                d={buildPath(path)}
                stroke="rgba(81,217,254,0.8)"
                strokeWidth="0.4"
                fill="none"
                filter="url(#npGlow)"
                className={styles.pulse}
                style={{
                  animationDelay: `${path.delay}s`,
                  animationDuration: `${path.duration}s`,
                }}
              />
            </g>
          ))
        )}

        {nodePositions.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="0.5"
            fill="url(#nodeRadial)"
            filter="url(#npGlow)"
            className={styles.node}
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
