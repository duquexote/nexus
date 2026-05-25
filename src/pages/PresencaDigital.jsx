import { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import WhatsBtn from '../components/WhatsBtn.jsx'
import { ArrowR, ArrowD } from '../components/Icons.jsx'
import { WhatsIcon } from '../components/Icons.jsx'
import { WHATSAPP_BASE } from '../constants.js'

function PdHero() {
  return (
    <section className="surface-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
          <source src="/atomo.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,24,17,0.6) 0%, rgba(6,24,17,0.88) 70%, rgba(6,24,17,0.96) 100%)' }}></div>
      </div>

      <div className="container-nx" style={{ position: 'relative', zIndex: 2, padding: '120px 28px 110px' }}>
        <div style={{ maxWidth: 920 }}>
<h1 className="font-display display-xl" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Seu negócio merece um site que <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>vende enquanto você dorme.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(245,239,224,0.78)', maxWidth: 640, marginBottom: 44, textWrap: 'pretty' }}>
            Não é só um site bonito. É a estrutura que conecta quem te procura ao momento de comprar. Desenvolvido em 3 a 5 dias, integrado com WhatsApp, pixel do Meta instalado e pronto para rodar anúncio.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#formulario" className="btn btn-primary-light">Quero meu site agora <ArrowD /></a>
            <a href="#incluido" className="btn btn-ghost-dark">Ver o que está incluído</a>
          </div>
        </div>

        <div style={{ marginTop: 110, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--nx-green-line)', paddingTop: 28 }} className="nx-hero-meta">
          {[
            { k: 'Prazo', v: '3-5 dias' },
            { k: 'Parcelamento', v: 'Até 3x' },
            { k: 'Suporte', v: '30 dias' },
            { k: 'Pixel Meta', v: 'Incluído' },
          ].map((m, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid var(--nx-green-line)' : 'none', padding: '0 20px' }}>
              <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.5)', marginBottom: 8 }}>{m.k}</div>
              <div className="font-display" style={{ fontSize: 22, color: 'var(--nx-cream)', letterSpacing: '-0.02em' }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) { .nx-hero-meta { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .nx-hero-meta > div:nth-child(2) { border-right: none !important; }
          .nx-hero-meta > div:nth-child(1), .nx-hero-meta > div:nth-child(2) { padding-bottom: 24px; border-bottom: 1px solid var(--nx-green-line); }
        }
      `}</style>
    </section>
  )
}

function PdPorque() {
  const items = [
    { num: '01', t: 'Instagram não é suficiente', d: 'Algoritmo muda. Conta pode ser derrubada. Site é seu — ninguém tira de você.' },
    { num: '02', t: 'Cliente pesquisa antes de comprar', d: '75% dos consumidores pesquisam no Google antes de decidir. Sem site, você não existe pra eles.' },
    { num: '03', t: 'Concorrente já tem', d: 'Cada dia sem site é um cliente que foi pro concorrente que apareceu primeiro.' },
    { num: '04', t: 'Anúncio sem site queima dinheiro', d: 'Tráfego pago só funciona quando o destino converte. Site profissional é o destino certo.' },
  ]
  return (
    <section className="surface-cream sec">
      <div className="container-nx">
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Quatro razões para não esperar <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>mais um trimestre sem site.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="nx-grid-2">
          {items.map((it, i) => (
            <div key={i} className="nx-porque-cell" style={{
              padding: '44px 36px 44px 0',
              borderTop: '1px solid var(--nx-cream-line)',
              borderRight: i % 2 === 0 ? '1px solid var(--nx-cream-line)' : 'none',
              paddingLeft: i % 2 === 0 ? 0 : 36,
              paddingRight: i % 2 === 0 ? 36 : 0,
            }}>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--nx-muted)', marginBottom: 20 }}>/ {it.num}</div>
              <h3 className="font-display" style={{ fontSize: 28, margin: 0, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--nx-green)' }}>{it.t}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#2a3a30', margin: 0, maxWidth: 460 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .nx-grid-2 { grid-template-columns: 1fr !important; }
          .nx-porque-cell { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  )
}

function PdIncluido() {
  const items = [
    'Design profissional exclusivo para o seu negócio',
    'Responsivo para celular e computador',
    'Formulário integrado com WhatsApp',
    'Pixel do Meta instalado e configurado',
    'SEO básico aplicado para aparecer no Google',
    'Entrega em 3 a 5 dias úteis',
    'Parcelado em até 3x',
    'Suporte de 30 dias após a entrega',
  ]
  return (
    <section id="incluido" className="surface-dark sec">
      <div className="container-nx">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }} className="nx-two-col">
          <div>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
              Tudo que seu site precisa. <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>Sem custo extra.</em>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(245,239,224,0.7)', lineHeight: 1.6, maxWidth: 420, marginBottom: 36 }}>
              Cada site Nexus já sai pronto para vender. Sem upsell de plugin, sem cobrança de manutenção surpresa.
            </p>
            <a href="#formulario" className="btn btn-primary-light">Começar agora <ArrowR /></a>
          </div>
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--nx-green-line)' }}>
              {items.map((t, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 24, alignItems: 'center',
                  padding: '22px 0',
                  borderBottom: '1px solid var(--nx-green-line)',
                }}>
                  <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--nx-accent)', minWidth: 32 }}>{String(i + 1).padStart(2, '0')}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M3 9l4 4 8-9" stroke="var(--nx-accent)" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                  <span style={{ fontSize: 16, color: 'var(--nx-cream)' }}>{t}</span>
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

function PdDepoimentos() {
  const [idx, setIdx] = useState(0)
  const total = 3

  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div style={{ marginTop: 96, maxWidth: 720, margin: '96px auto 0' }}>
      <div style={{ marginBottom: 56 }}>
        <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nx-muted)', marginBottom: 16 }}>Depoimentos</div>
        <h2 className="font-display display-md" style={{ margin: 0, fontWeight: 500, textWrap: 'balance', color: 'var(--nx-ink)' }}>
          Quem já passou pela Nexus<br /><em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>conta melhor do que a gente.</em>
        </h2>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ overflow: 'hidden', borderRadius: 'var(--nx-radius)' }}>
          <div style={{
            display: 'flex',
            transform: `translateX(-${idx * 100}%)`,
            transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ minWidth: '100%' }}>
                <img
                  src={`/depoimento${n}.jpeg`}
                  alt={`Depoimento ${n}`}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 28 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[0, 1, 2].map(n => (
              <button
                key={n}
                onClick={() => setIdx(n)}
                style={{
                  width: n === idx ? 28 : 8, height: 8,
                  borderRadius: 4,
                  background: n === idx ? 'var(--nx-green)' : 'var(--nx-cream-line)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={prev} style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'transparent', border: '1px solid var(--nx-cream-line)',
              color: 'var(--nx-green)', cursor: 'pointer', fontSize: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--nx-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--nx-cream-line)'}
            >←</button>
            <button onClick={next} style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'transparent', border: '1px solid var(--nx-cream-line)',
              color: 'var(--nx-green)', cursor: 'pointer', fontSize: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--nx-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--nx-cream-line)'}
            >→</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PdGaleria() {
  const [active, setActive] = useState(null)

  const sites = [
    { nicho: 'Aegean Watches', file: '/site-aegean.png', url: 'https://aegeanwatches.com.br' },
    { nicho: 'Ana Moreira', file: '/site-ana.png', url: 'https://anamoreirapsi.com.br' },
    { nicho: 'Alice Damasceno', file: '/site-alice.png', url: 'https://alicedamascenopsi.com.br' },
    { nicho: 'Viviane Leite', file: '/site-viviane.png', url: 'https://vivianeleite.com.br' },
  ]

  return (
    <section className="surface-cream sec">
      <div className="container-nx">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Sites que já entregamos.<br/><em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>Para negócios como o seu.</em>
          </h2>
          <p style={{ fontSize: 17, color: '#2a3a30', lineHeight: 1.6, maxWidth: 580 }}>
            De clínicas a consultórios, de comércios a profissionais liberais — cada site construído para converter, não só para parecer bonito.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="nx-grid-2">
          {sites.map((s, i) => (
            <div key={i} onClick={() => setActive(s)} style={{ cursor: 'pointer' }} className="nx-site-card">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--nx-radius)' }}>
                <img
                  src={s.file}
                  alt={`Site · ${s.nicho}`}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                  className="nx-site-img"
                />
                <div className="nx-site-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(6,24,17,0.55)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.3s ease',
                }}>
                  <span style={{
                    color: 'var(--nx-cream)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    border: '1px solid rgba(245,239,224,0.5)', padding: '10px 20px', borderRadius: 'var(--nx-radius)',
                  }}>Ver site →</span>
                </div>
              </div>
              <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="font-display" style={{ fontSize: 18, color: 'var(--nx-green)', letterSpacing: '-0.01em' }}>{s.nicho}</div>
                <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--nx-muted)' }}>case · 0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <PdDepoimentos />
      </div>
      <style>{`
        @media (max-width: 760px) { .nx-grid-2 { grid-template-columns: 1fr !important; } }
        @media (max-width: 720px) { .nx-depoimento { padding: 28px !important; } }
        .nx-site-card:hover .nx-site-overlay { opacity: 1 !important; }
        .nx-site-card:hover .nx-site-img { transform: scale(1.03); }
      `}</style>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(6,24,17,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: 1100,
              height: '85vh',
              background: 'var(--nx-green-deep)',
              border: '1px solid var(--nx-green-line)',
              borderRadius: 'var(--nx-radius)',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid var(--nx-green-line)',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--nx-accent)' }}>
                  {active.nicho}
                </span>
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener"
                  style={{ fontSize: 12, color: 'rgba(245,239,224,0.45)', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {active.url.replace('https://', '')} ↗
                </a>
              </div>
              <button
                onClick={() => setActive(null)}
                style={{
                  background: 'transparent', border: '1px solid var(--nx-green-line)',
                  color: 'var(--nx-cream)', cursor: 'pointer',
                  padding: '6px 14px', borderRadius: 'var(--nx-radius)',
                  fontSize: 12, fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}
              >
                Fechar ✕
              </button>
            </div>
            <iframe
              src={active.url}
              title={active.nicho}
              style={{ flex: 1, border: 'none', width: '100%' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

function PdForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ segmento: '', urgencia: '', investimento: '', nome: '', whats: '' })

  const segmentos = ['Saúde / Estética', 'Comércio / Varejo', 'Profissional liberal', 'Serviços', 'Educação', 'Outro']
  const urgencias = ['Para ontem', 'Próximas 2 semanas', 'Próximo mês', 'Estou pesquisando']
  const invests = ['Até R$ 1.500', 'R$ 1.500 a R$ 3.000', 'R$ 3.000 a R$ 5.000', 'Acima de R$ 5.000']

  const set = (k, v) => setData({ ...data, [k]: v })

  const submit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá Nexus! Quero um site.\n\n• Segmento: ${data.segmento}\n• Urgência: ${data.urgencia}\n• Investimento: ${data.investimento}\n• Nome: ${data.nome}\n• WhatsApp: ${data.whats}`
    )
    window.open(`${WHATSAPP_BASE}?text=${msg}`, '_blank')
  }

  const steps = ['Segmento', 'Urgência', 'Investimento', 'Contato']

  return (
    <section id="formulario" className="surface-dark sec">
      <div className="container-nx">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
<h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Pronto para ter um site que <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>trabalha por você?</em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(245,239,224,0.75)', lineHeight: 1.55 }}>
            Responda 3 perguntas rápidas. Nossa equipe entra em contato em até 2 horas.
          </p>
        </div>

        <form onSubmit={submit} style={{ background: 'var(--nx-cream)', color: 'var(--nx-ink)', padding: '48px', borderRadius: 'var(--nx-radius)', maxWidth: 920 }} className="nx-form-card">
          <div style={{ display: 'flex', gap: 4, marginBottom: 40 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ height: 3, background: i <= step ? 'var(--nx-green)' : 'var(--nx-cream-line)' }}></div>
                <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: i === step ? 'var(--nx-green)' : 'var(--nx-muted)' }}>
                  0{i + 1} · {s}
                </div>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="field">
              <label>Qual o segmento do seu negócio?</label>
              <div className="opts" style={{ marginTop: 8 }}>
                {segmentos.map(s => (
                  <label key={s} className={`opt ${data.segmento === s ? 'active' : ''}`}>
                    <span className="dot"></span>
                    <input type="radio" name="seg" value={s} onChange={() => set('segmento', s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="field">
              <label>Para quando você precisa do site?</label>
              <div className="opts" style={{ marginTop: 8 }}>
                {urgencias.map(s => (
                  <label key={s} className={`opt ${data.urgencia === s ? 'active' : ''}`}>
                    <span className="dot"></span>
                    <input type="radio" name="urg" value={s} onChange={() => set('urgencia', s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="field">
              <label>Faixa de investimento prevista</label>
              <div className="opts" style={{ marginTop: 8 }}>
                {invests.map(s => (
                  <label key={s} className={`opt ${data.investimento === s ? 'active' : ''}`}>
                    <span className="dot"></span>
                    <input type="radio" name="inv" value={s} onChange={() => set('investimento', s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: 'grid', gap: 28 }}>
              <div className="field">
                <label>Seu nome</label>
                <input type="text" placeholder="Como podemos te chamar?" value={data.nome} onChange={e => set('nome', e.target.value)} required />
              </div>
              <div className="field">
                <label>WhatsApp para contato</label>
                <input type="tel" placeholder="(71) 9 0000-0000" value={data.whats} onChange={e => set('whats', e.target.value)} required />
              </div>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--nx-muted)', paddingTop: 12, borderTop: '1px solid var(--nx-cream-line)' }}>
                Resumo: {data.segmento || '—'} · {data.urgencia || '—'} · {data.investimento || '—'}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, gap: 16, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
              className="btn btn-ghost-light" style={{ opacity: step === 0 ? 0.3 : 1, cursor: step === 0 ? 'not-allowed' : 'pointer' }}>
              ← Voltar
            </button>
            {step < 3 ? (
              <button type="button" onClick={() => setStep(step + 1)} className="btn btn-primary">
                Próximo <ArrowR />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                <WhatsIcon /> Enviar pelo WhatsApp <ArrowR />
              </button>
            )}
          </div>
        </form>
      </div>
      <style>{`@media (max-width: 600px) { .nx-form-card { padding: 28px !important; } }`}</style>
    </section>
  )
}

export default function PresencaDigital() {
  return (
    <>
      <Nav />
      <main>
        <PdHero />
        <PdPorque />
        <PdIncluido />
        <PdGaleria />
        <PdForm />
      </main>
      <Footer />
    </>
  )
}
