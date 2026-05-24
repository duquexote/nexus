export default function Placeholder({ label, hint, aspect = '16/9', dark = false, style = {}, className = '' }) {
  return (
    <div className={`img-placeholder ${dark ? 'dark' : ''} ${className}`} style={{ aspectRatio: aspect, ...style }}>
      <div className="label">
        {label}
        {hint && <small>{hint}</small>}
      </div>
    </div>
  )
}
