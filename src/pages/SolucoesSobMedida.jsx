import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import WhatsBtn from '../components/WhatsBtn.jsx'
import { ArrowD } from '../components/Icons.jsx'

function SsHero() {
  return (
    <section className="surface-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src="/atomo.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,24,17,0.5) 0%, rgba(6,24,17,0.85) 60%, rgba(6,24,17,0.96) 100%)' }}></div>
      </div>

      <div className="container-nx" style={{ position: 'relative', zIndex: 2, padding: '120px 28px 110px' }}>
        <div style={{ maxWidth: 980 }}>
<h1 className="font-display display-xl" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Sua empresa precisa de algo que <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>não está no cardápio?</em> A Nexus resolve.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(245,239,224,0.78)', maxWidth: 660, marginBottom: 44, textWrap: 'pretty' }}>
            Automações, chatbots, sistemas internos, integrações, estratégias digitais complexas. Se resolve com tecnologia e inteligência, a gente entrega.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <WhatsBtn light>Conta o que você precisa</WhatsBtn>
            <a href="#exemplos" className="btn btn-ghost-dark">Ver exemplos <ArrowD /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SsExemplos() {
  const items = [
    {
      t: 'Automação de atendimento',
      d: 'Chatbot no WhatsApp que qualifica lead, responde dúvidas e agenda sem precisar de pessoa.',
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="4" y="8" width="28" height="20" rx="2"/><path d="M10 16h8M10 20h12"/><circle cx="26" cy="14" r="1.5" fill="currentColor"/></svg>
    },
    {
      t: 'Sistema de gestão interno',
      d: 'Ferramentas digitais para organizar equipe, clientes e processos — como o que usamos na própria Nexus.',
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="4" y="4" width="12" height="12"/><rect x="20" y="4" width="12" height="12"/><rect x="4" y="20" width="12" height="12"/><rect x="20" y="20" width="12" height="12"/></svg>
    },
    {
      t: 'Integração de plataformas',
      d: 'Conectar CRM, e-commerce, ERP e ferramentas de marketing para que tudo funcione junto.',
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="9" cy="18" r="5"/><circle cx="27" cy="18" r="5"/><path d="M14 18h8"/><path d="M18 8v4M18 24v4"/></svg>
    },
    {
      t: 'Estratégia de lançamento digital',
      d: 'Planejamento completo de entrada no digital — do posicionamento à primeira campanha.',
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 30L24 12l-6-6L4 22z"/><path d="M22 14l6 6"/><path d="M28 20l4-4-2-2-4 4"/></svg>
    },
    {
      t: 'Produção de conteúdo com IA',
      d: 'Geração de copies, roteiros e calendário editorial com inteligência artificial aplicada à sua marca.',
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M18 4l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
    },
    {
      t: 'Solução não listada',
      d: 'Traga o desafio. A Nexus avalia e te diz o que é possível fazer.',
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M14 14a4 4 0 1 1 6 3.5c-1 .5-2 1.5-2 2.5M18 26h.01"/><circle cx="18" cy="18" r="14"/></svg>,
      highlight: true,
    },
  ]
  return (
    <section id="exemplos" className="surface-cream sec">
      <div className="container-nx">
        <div style={{ maxWidth: 780, marginBottom: 64 }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Exemplos do que já resolvemos — <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>e do que podemos resolver para você.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--nx-cream-line)' }} className="nx-exemp-grid">
          {items.map((it, i) => {
            const row = Math.floor(i / 3)
            const col = i % 3
            return (
              <div key={i} style={{
                padding: 36,
                borderRight: col < 2 ? '1px solid var(--nx-cream-line)' : 'none',
                borderBottom: row === 0 ? '1px solid var(--nx-cream-line)' : 'none',
                background: it.highlight ? 'var(--nx-green)' : 'transparent',
                color: it.highlight ? 'var(--nx-cream)' : 'var(--nx-ink)',
                minHeight: 280,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }} className="nx-exemp-cell">
                <div style={{ color: it.highlight ? 'var(--nx-accent)' : 'var(--nx-green)' }}>{it.icon}</div>
                <div>
                  <h3 className="font-display" style={{ fontSize: 24, margin: 0, fontWeight: 500, letterSpacing: '-0.02em', color: it.highlight ? 'var(--nx-cream)' : 'var(--nx-green)' }}>{it.t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, color: it.highlight ? 'rgba(245,239,224,0.78)' : '#2a3a30' }}>{it.d}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .nx-exemp-grid { grid-template-columns: 1fr 1fr !important; }
          .nx-exemp-cell { border-right: none !important; border-bottom: 1px solid var(--nx-cream-line) !important; }
        }
        @media (max-width: 560px) {
          .nx-exemp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function SsProcesso() {
  const steps = [
    { n: '01', t: 'Você conta o desafio', d: 'Manda mensagem no WhatsApp descrevendo o que você precisa. Sem formulário longo, sem burocracia.' },
    { n: '02', t: 'A Nexus avalia', d: 'Nossa equipe analisa a viabilidade e te retorna com uma proposta clara — escopo, prazo e investimento.' },
    { n: '03', t: 'A gente executa', d: 'Com aprovação, iniciamos a execução. Entrega com acompanhamento próximo e suporte pós-entrega.' },
  ]
  return (
    <section className="surface-cream-2 sec">
      <div className="container-nx">
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Três etapas. <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>Sem burocracia.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--nx-cream-line)' }} className="nx-services-grid">
          {steps.map((s, i) => (
            <div key={i} style={{
              padding: '48px 40px',
              borderRight: i < 2 ? '1px solid var(--nx-cream-line)' : 'none',
              position: 'relative',
            }} className="nx-ss-step">
              <div className="font-display" style={{ fontSize: 86, fontWeight: 500, color: 'var(--nx-cream-line)', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 24 }}>
                {s.n}
              </div>
              <h3 className="font-display" style={{ fontSize: 28, margin: 0, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--nx-green)' }}>{s.t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#2a3a30', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .nx-services-grid { grid-template-columns: 1fr !important; }
          .nx-ss-step { border-right: none !important; border-bottom: 1px solid var(--nx-cream-line); }
          .nx-ss-step:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}

function SsPorque() {
  const bullets = [
    'Diagnóstico antes de qualquer solução',
    'Velocidade de execução: dias, não meses',
    'Tecnologia e inteligência aplicada ao seu contexto',
    'Sem contrato longo — resultado justifica a continuidade',
    'Suporte próximo durante e após a entrega',
  ]
  return (
    <section className="surface-cream sec">
      <div className="container-nx">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }} className="nx-two-col">
          <div>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
              Não vendemos pacote. <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>Resolvemos problema.</em>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: '#2a3a30', marginBottom: 0 }}>
              A maioria das agências tem um cardápio fixo e encaixa o cliente no serviço mais próximo. A Nexus parte do desafio real do negócio e constrói a solução que faz sentido — com inteligência aplicada, velocidade de execução e entrega real.
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--nx-cream-line)' }}>
              {bullets.map((b, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 20, alignItems: 'center',
                  padding: '22px 0',
                  borderBottom: '1px solid var(--nx-cream-line)',
                }}>
                  <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--nx-muted)', minWidth: 28 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--nx-green)' }}>→</span>
                  <span style={{ fontSize: 16, color: 'var(--nx-ink)' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .nx-two-col { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  )
}

function SsFinalCTA() {
  return (
    <section className="surface-dark sec-lg" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
        <img src="/atomo-branco.png" alt="" aria-hidden="true" style={{ width: 700, height: 700, objectFit: 'contain' }} />
      </div>
      <div className="container-nx" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
          Conta o desafio. <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>A Nexus avalia.</em>
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(245,239,224,0.78)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Sem formulário longo. Sem espera. Manda uma mensagem e nossa equipe responde em até 2 horas.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <WhatsBtn light>Falar com a Nexus agora</WhatsBtn>
        </div>
        <div className="font-mono" style={{ marginTop: 36, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.5)' }}>
          Atendimento seg–sex · 8h–20h · Salvador, Bahia
        </div>
      </div>
    </section>
  )
}

export default function SolucoesSobMedida() {
  return (
    <>
      <Nav />
      <main>
        <SsHero />
        <SsExemplos />
        <SsProcesso />
        <SsPorque />
        <SsFinalCTA />
      </main>
      <Footer />
    </>
  )
}
