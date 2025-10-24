export default function FrameTwo({
  className = "",
  strokeWidth = 2, // outline thickness (CSS pixels)
  nonScalingStroke = true, // keep stroke width constant when scaled
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 964 326"
      style={{ transform: "translate(2px)" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* little dots — use currentColor so Tailwind text-* controls color */}
      <rect
        width="6"
        height="6"
        rx="3"
        transform="matrix(-1 0 0 1 164 320)"
        fill="#0D4BA0"
      />
      <rect
        width="6"
        height="6"
        rx="3"
        transform="matrix(-1 0 0 1 868 320)"
        fill="#0D4BA0"
      />
      <rect
        width="6"
        height="6"
        rx="3"
        transform="matrix(-1 0 0 1 804 0)"
        fill="#0D4BA0"
      />
      <rect
        width="6"
        height="6"
        rx="3"
        transform="matrix(-1 0 0 1 605 0)"
        fill="#0D4BA0"
      />
      <rect
        width="6"
        height="6"
        rx="3"
        transform="matrix(-1 0 0 1 964 224)"
        fill="#0D4BA0"
      />
      <rect
        width="6"
        height="6"
        rx="3"
        transform="matrix(-1 0 0 1 964 96)"
        fill="#0D4BA0"
      />

      {/* main outline path */}
      <path
        d="M161 323H33L1 291V67L33 35H442L474 3H602M865 323H929L961 291V227M961 99V35L929 3H801"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect={nonScalingStroke ? "non-scaling-stroke" : undefined}
      />
    </svg>
  );
}
