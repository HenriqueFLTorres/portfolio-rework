const Nothing = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={1070}
    height={449}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M138.868-240.663C-132.813-221.898-12.665-47.141 81.369 37.891c79.659 63.53 294.68 183.846 517.486 156.87 278.508-33.719 323.429-189.123-39.53-177.395-362.959 11.729-80.857-281.487-420.457-258.029Z"
        fill="#D9D9D9"
        fillOpacity={0.2}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-278}
        y={-492}
        width={1347.64}
        height={940.641}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0}  result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={125}
          result="effect1_foregroundBlur_2_38"
        />
      </filter>
    </defs>
  </svg>
);

export default Nothing;
