export default function ImageFrame({
  className = "",
  strokeWidth = 2,
  nonScalingStroke = true,
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 457 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* main outline path */}
      <path
        d="M1 225L33 257H424L456 225V33L424 1H33L1 33V225Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect={nonScalingStroke ? "non-scaling-stroke" : undefined}
      />
    </svg>
  );
}
