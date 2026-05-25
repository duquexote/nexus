import { Link } from 'react-router-dom'
import WhatsBtn from './WhatsBtn.jsx'
import { WHATSAPP_URL } from '../constants.js'

export default function Footer() {
  return (
    <footer className="surface-dark" style={{ borderTop: '1px solid var(--nx-green-line)' }}>
      <div className="container-nx" style={{ padding: '72px 28px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 }} className="nx-footer-grid">
          <div>
            <div style={{ marginBottom: 24 }}>
              <img src="/logo-nexus-branco.png" alt="Nexus" style={{ height: 24, width: 'auto', display: 'block' }} />
            </div>
            <p className="font-display" style={{ fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.02em', maxWidth: 380, marginBottom: 28 }}>
              Conectamos o negócio que existe ao que ele deveria ser.
            </p>
            <WhatsBtn light>Falar no WhatsApp</WhatsBtn>
          </div>
          <div>
            <div className="eyebrow" style={{ opacity: 0.6, marginBottom: 18 }}>Serviços</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><Link to="/presenca-digital" style={{ color: 'rgba(245,239,224,0.8)', textDecoration: 'none', fontSize: 15 }}>Presença Digital</Link></li>
              <li><Link to="/performance-midia" style={{ color: 'rgba(245,239,224,0.8)', textDecoration: 'none', fontSize: 15 }}>Performance em Mídia</Link></li>
              <li><Link to="/solucoes-sob-medida" style={{ color: 'rgba(245,239,224,0.8)', textDecoration: 'none', fontSize: 15 }}>Soluções Sob Medida</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ opacity: 0.6, marginBottom: 18 }}>Nexus</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><Link to="/#sobre" style={{ color: 'rgba(245,239,224,0.8)', textDecoration: 'none', fontSize: 15 }}>Sobre</Link></li>
              <li><Link to="/#cases" style={{ color: 'rgba(245,239,224,0.8)', textDecoration: 'none', fontSize: 15 }}>Cases</Link></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{ color: 'rgba(245,239,224,0.8)', textDecoration: 'none', fontSize: 15 }}>Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ opacity: 0.6, marginBottom: 18 }}>Atendimento</div>
            <p style={{ color: 'rgba(245,239,224,0.8)', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
              Segunda a sexta<br/>8h às 20h<br/><br/>
              Salvador, Bahia<br/>Brasil
            </p>
          </div>
        </div>
        <div style={{ marginTop: 64, paddingTop: 28, borderTop: '1px solid var(--nx-green-line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.55)' }}>
            © 2026 Nexus · Todos os direitos reservados
          </span>
          <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.55)' }}>
            v1.0 · Salvador / BA
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .nx-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 540px) {
          .nx-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
