import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AtomMark from './AtomMark.jsx'
import WhatsBtn from './WhatsBtn.jsx'

const links = [
  { path: '/', label: 'Início' },
  { path: '/presenca-digital', label: 'Presença Digital' },
  { path: '/performance-midia', label: 'Performance em Mídia' },
  { path: '/solucoes-sob-medida', label: 'Soluções Sob Medida' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isCurrent = (path) => path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <header className="surface-dark" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--nx-green-line)' }}>
      <div className="container-nx" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--nx-cream)', textDecoration: 'none' }}>
          <AtomMark size={26} color="var(--nx-cream)" />
          <span className="font-display" style={{ fontSize: 22, letterSpacing: '0.04em', fontWeight: 500 }}>NEXUS</span>
        </Link>
        <nav className="nx-nav-desktop" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.path} to={l.path}
              style={{
                color: isCurrent(l.path) ? 'var(--nx-cream)' : 'rgba(245,239,224,0.65)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.005em',
                position: 'relative',
                paddingBottom: 4,
                borderBottom: isCurrent(l.path) ? '1px solid var(--nx-cream)' : '1px solid transparent',
              }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nx-nav-desktop">
          <WhatsBtn light>WhatsApp</WhatsBtn>
        </div>
        <button className="nx-nav-mobile" onClick={() => setOpen(!open)}
          style={{ background: 'transparent', border: '1px solid var(--nx-green-line)', color: 'var(--nx-cream)', padding: '8px 12px', borderRadius: 4, cursor: 'pointer', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="nx-nav-mobile" style={{ borderTop: '1px solid var(--nx-green-line)', padding: '20px 28px 28px' }}>
          {links.map(l => (
            <Link key={l.path} to={l.path} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: 'var(--nx-cream)', textDecoration: 'none', borderBottom: '1px solid var(--nx-green-line)' }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 20 }}>
            <WhatsBtn light>Falar no WhatsApp</WhatsBtn>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 900px) {
          .nx-nav-desktop { display: none !important; }
        }
        @media (min-width: 901px) {
          .nx-nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
