import * as React from 'react';

const Logo = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 200 200"
    style={{
      enableBackground: 'new 0 0 200 200'
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {'.st0{fill:#e4e4e4;backdrop-filter:drop-shadow(4px 4px 10px #00f)}'}
    </style>
    <path
      className="st0"
      d="M121.5 57.5V17.3L83.2 49.4 59.6 69.3l19.8 23.6 75.4 89.8H195L103 73.1z"
      id="T"
    />
    <path
      className="st0"
      d="m81.8 158.5 20.3 24.2h40.3L52.3 75.4 28.7 95.2 62 134.9 5 182.7h47.9z"
      id="H"
    />
  </svg>
);

export default Logo;
