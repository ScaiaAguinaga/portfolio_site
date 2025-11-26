export default function FrameThree({
  className = "",
  strokeWidth = 2, // outline thickness (CSS pixels)
  nonScalingStroke = true, // keep stroke width constant when scaled
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 964 326"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* dot accents */}
      <rect x="800" y="320" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect x="96" y="320" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect x="160" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect x="359" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect y="224" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect y="96" width="6" height="6" rx="3" fill="#0D4BA0" />

      {/* main outline path */}
      <path
        d="M803 323H931L963 291V67L931 35H522L490 3H362M99 323H35L3 291V227M3 99V35L35 3H163"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect={nonScalingStroke ? "non-scaling-stroke" : undefined}
      />
    </svg>
  );
}
