import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import WhatsBtn from '../components/WhatsBtn.jsx'
import { ArrowR, ArrowD } from '../components/Icons.jsx'

function HomeHero() {
  return (
    <section className="surface-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src="/atomo.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,24,17,0.65) 0%, rgba(6,24,17,0.88) 60%, rgba(6,24,17,0.96) 100%)' }}></div>
      </div>

      <div className="container-nx" style={{ position: 'relative', zIndex: 2, padding: '140px 28px 120px' }}>
        <div style={{ maxWidth: 980 }}>
<h1 className="font-display display-xl" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Conectamos o negócio<br/>que existe ao que<br/><em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>ele deveria ser.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(245,239,224,0.78)', maxWidth: 620, marginBottom: 44, textWrap: 'pretty' }}>
            Sites profissionais entregues em 3 a 5 dias. Gestão de tráfego que gera cliente. Soluções digitais que funcionam de verdade — sem promessa vazia.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <WhatsBtn light>Quero crescer meu negócio</WhatsBtn>
            <a href="#servicos" className="btn btn-ghost-dark">Ver o que fazemos <ArrowD /></a>
          </div>
        </div>

        <div style={{ marginTop: 140, display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, color: 'rgba(245,239,224,0.55)' }}>
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Nexus / 2026<br/>
            <span style={{ color: 'var(--nx-accent)' }}>● Disponível para 2 novos clientes</span>
          </div>
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'right' }}>
            Salvador → Brasil<br/>
            Operamos 100% remoto
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeStats() {
  const stats = [
    { num: 'R$ 400k', suffix: '', label: 'Faturados por um cliente em 30 dias de campanha.' },
    { num: '3-5', suffix: 'dias', label: 'Prazo de entrega de sites profissionais.' },
    { num: '4', suffix: 'clientes', label: 'Escalando agora com o Método Nexus.' },
    { num: '80x', suffix: '', label: 'De retorno sobre investimento em mídia paga.' },
  ]
  return (
    <section className="surface-cream sec-sm">
      <div className="container-nx">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="nx-stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderRight: i < 3 ? '1px solid var(--nx-cream-line)' : 'none',
            }} className="nx-stat-cell">
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nx-muted)', marginBottom: 18 }}>
                / {String(i + 1).padStart(2, '0')}
              </div>
              <div className="stat-num" style={{ color: 'var(--nx-green)' }}>
                {s.num}
                {s.suffix && <span className="font-display" style={{ fontSize: '0.4em', marginLeft: 8, opacity: 0.6, letterSpacing: 0 }}>{s.suffix}</span>}
              </div>
              <p style={{ marginTop: 16, fontSize: 14, color: 'var(--nx-ink)', lineHeight: 1.45, maxWidth: 220 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .nx-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .nx-stat-cell:nth-child(2) { border-right: none !important; }
          .nx-stat-cell:nth-child(1), .nx-stat-cell:nth-child(2) { border-bottom: 1px solid var(--nx-cream-line); }
        }
        @media (max-width: 560px) {
          .nx-stats-grid { grid-template-columns: 1fr !important; }
          .nx-stat-cell { border-right: none !important; border-bottom: 1px solid var(--nx-cream-line) !important; }
        }
      `}</style>
    </section>
  )
}

function HomeSobre() {
  return (
    <section id="sobre" className="surface-cream-2 sec">
      <div className="container-nx">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }} className="nx-two-col">
          <div>
            <img
              src="/kevin.webp"
              alt="Kevin Lima — Fundador da Nexus"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', borderRadius: 'var(--nx-radius)' }}
            />
            <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--nx-muted)', marginTop: 16 }}>
              Kevin Lima · Fundador & estrategista
            </div>
          </div>
          <div>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
              De quem opera.<br/><em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>Não de quem ensina.</em>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 20, color: '#2a3a30' }}>
              A Nexus nasceu de uma premissa simples: negócios bons perdem para negócios bem posicionados no digital. Não porque o produto é inferior — mas porque o elo entre o que existe e o cliente certo nunca foi construído.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 40, color: '#2a3a30' }}>
              Somos esse elo. Combinamos velocidade de execução, inteligência aplicada e estratégia orientada por dado para conectar negócios ao crescimento que eles sempre mereceram.
            </p>
            <a href="#servicos" className="btn btn-primary">Conhecer o método <ArrowR /></a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .nx-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

function HomeServicos() {
  const services = [
    {
      num: '01',
      title: 'Presença Digital',
      desc: 'Sites profissionais que convertem visita em cliente. Entregue em 3 a 5 dias úteis.',
      cta: 'Quero meu site',
      to: '/presenca-digital',
      icon: 'globe',
    },
    {
      num: '02',
      title: 'Performance em Mídia',
      desc: 'Gestão de tráfego pago no Meta e Google que gera lead qualificado e receita mensurável.',
      cta: 'Quero mais clientes',
      to: '/performance-midia',
      icon: 'chart',
    },
    {
      num: '03',
      title: 'Soluções Sob Medida',
      desc: 'Seu negócio precisa de algo específico? A Nexus resolve. Fala com a gente.',
      cta: 'Quero uma solução',
      to: '/solucoes-sob-medida',
      icon: 'grid',
    },
  ]

  const IconFor = ({ kind }) => {
    const s = { stroke: 'var(--nx-cream)', strokeWidth: 1.2, fill: 'none' }
    if (kind === 'globe') return <svg width="44" height="44" viewBox="0 0 44 44" {...s}><circle cx="22" cy="22" r="16"/><ellipse cx="22" cy="22" rx="6.5" ry="16"/><path d="M6 22h32M22 6c-3 4-3 28 0 32"/></svg>
    if (kind === 'chart') return <svg width="44" height="44" viewBox="0 0 44 44" {...s}><path d="M6 36h32M10 30l6-8 6 4 10-14"/><circle cx="32" cy="12" r="2.5" fill="var(--nx-cream)"/></svg>
    return <svg width="44" height="44" viewBox="0 0 44 44" {...s}><rect x="6" y="6" width="14" height="14"/><rect x="24" y="6" width="14" height="14"/><rect x="6" y="24" width="14" height="14"/><rect x="24" y="24" width="14" height="14"/></svg>
  }

  return (
    <section id="servicos" className="surface-dark sec">
      <div className="container-nx">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 32 }}>
          <div style={{ maxWidth: 560 }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
              Três frentes. Uma só lógica: <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>conectar negócio a resultado.</em>
            </h2>
          </div>
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.5)' }}>
            03 · serviços nexus
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="nx-services-grid">
          {services.map((s) => (
            <Link key={s.num} to={s.to} className="card-dark" style={{
              padding: 36, display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'var(--nx-cream)', minHeight: 420, position: 'relative',
            }}>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--nx-accent)', marginBottom: 32 }}>
                / {s.num}
              </div>
              <IconFor kind={s.icon} />
              <h3 className="font-display" style={{ fontSize: 30, fontWeight: 500, marginTop: 36, marginBottom: 16, letterSpacing: '-0.02em' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(245,239,224,0.75)', marginBottom: 32, flex: 1 }}>
                {s.desc}
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, borderTop: '1px solid var(--nx-green-line)', paddingTop: 20 }}>
                {s.cta} <ArrowR />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .nx-services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function HomeCase() {
  return (
    <section id="cases" className="surface-cream sec">
      <div className="container-nx">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="nx-two-col">
          <img
            src="/relogio.PNG"
            alt="Relógio Aegean Watches"
            style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', borderRadius: 'var(--nx-radius)' }}
          />
          <div>
<h2 className="font-display display-md" style={{ margin: 0, fontWeight: 500, lineHeight: 1.05, textWrap: 'balance' }}>
              R$ 400.000 em vendas.<br/>R$ 5.000 em mídia.<br/><em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>30 dias.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 36, color: '#2a3a30' }}>
              Eduardo vendia relógios de luxo por indicação. O teto era a própria rede. Em 30 dias, a Nexus construiu a estrutura digital, ativou as campanhas e conectou o produto ao comprador certo.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--nx-cream-line)', borderBottom: '1px solid var(--nx-cream-line)' }}>
              {[
                { v: '800+', k: 'Leads captados' },
                { v: '44%', k: 'Qualificados' },
                { v: 'R$ 97k', k: 'Ticket médio' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '24px 16px', borderRight: i < 2 ? '1px solid var(--nx-cream-line)' : 'none' }}>
                  <div className="font-display" style={{ fontSize: 32, fontWeight: 500, color: 'var(--nx-green)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.v}</div>
                  <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--nx-muted)', marginTop: 8 }}>{s.k}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <WhatsBtn>Quero resultado como este</WhatsBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeFinalCTA() {
  return (
    <section className="surface-dark sec-lg" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.07, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
        <img src="/atomo-branco.png" alt="" aria-hidden="true" style={{ width: 600, height: 600, objectFit: 'contain' }} />
      </div>
      <div className="container-nx" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
          Seu negócio é bom.<br/><em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>Está na hora de aparecer como tal.</em>
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(245,239,224,0.75)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Manda uma mensagem. Em até 2 horas nossa equipe responde com um diagnóstico inicial — sem formulário longo, sem espera.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <WhatsBtn light>Falar no WhatsApp agora</WhatsBtn>
        </div>
        <div className="font-mono" style={{ marginTop: 36, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.5)' }}>
          Resposta em até 2h · Seg-Sex · 8h-20h
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeSobre />
        <HomeServicos />
        <HomeCase />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  )
}
