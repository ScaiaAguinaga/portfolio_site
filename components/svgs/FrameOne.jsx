export default function FrameOne({
  className = "",
  strokeWidth = 2, // outline thickness (CSS pixels)
  nonScalingStroke = true, // keep stroke width constant when scaled
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 964 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* little dots — use currentColor so Tailwind text-* controls color */}
      <rect x="800" y="318" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect x="96" y="318" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect y="222" width="6" height="6" rx="3" fill="#0D4BA0" />
      <rect y="94" width="6" height="6" rx="3" fill="#0D4BA0" />

      {/* main outline path */}
      <path
        d="M803 321H931L963 289V65L931 33H522L490 1H35L3 33V97M99 321H35L3 289V225"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect={nonScalingStroke ? "non-scaling-stroke" : undefined}
      />
    </svg>
  );
}
