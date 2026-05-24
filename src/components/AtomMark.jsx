export default function AtomMark({ size = 28, color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.95">
        <ellipse cx="20" cy="20" rx="16" ry="6" />
        <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(120 20 20)" />
      </g>
      <circle cx="20" cy="20" r="2.6" fill={color} />
    </svg>
  )
}
