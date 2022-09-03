import React from 'react';

function Arrow(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M20.5 11.5l-6 6-6-6"
      ></path>
    </svg>
  );
}

export default Arrow;
