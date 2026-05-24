export default function Eyebrow({ children, light = false }) {
  return (
    <div className="eyebrow" style={{ color: light ? 'rgba(245,239,224,0.65)' : 'var(--nx-muted)', marginBottom: 18 }}>
      <span className="rule"></span>{children}
    </div>
  )
}
