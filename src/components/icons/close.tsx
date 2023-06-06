import type { InlineSVGProps } from "@interfaces/inlineSvg";

export function Close({
  className = "",
  width = 20,
  height = 20,
  fill = "#1f2937",
}: InlineSVGProps) {
  return (
    <svg
      width={width.toString()}
      height={height.toString()}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="#f1f5f9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#f1f5f9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
