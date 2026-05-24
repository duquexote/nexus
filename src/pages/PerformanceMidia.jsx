import { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import WhatsBtn from '../components/WhatsBtn.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import { ArrowR, ArrowD } from '../components/Icons.jsx'
import { WhatsIcon } from '../components/Icons.jsx'
import { WHATSAPP_BASE } from '../constants.js'

function PmHero() {
  return (
    <section className="surface-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div className="img-placeholder dark" style={{ width: '100%', height: '100%', border: 'none' }}>
          <div className="label" style={{ opacity: 0.18, fontSize: 13 }}>
            HERO · DASHBOARD META ADS EM ASCENSÃO
            <small>/public/hero-performance.jpg · screenshot real de campanha · dados anonimizados</small>
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,24,17,0.62) 0%, rgba(6,24,17,0.9) 70%, rgba(6,24,17,0.97) 100%)' }}></div>
      </div>

      <div className="container-nx" style={{ position: 'relative', zIndex: 2, padding: '120px 28px 110px' }}>
        <div style={{ maxWidth: 980 }}>
          <Eyebrow light>Para negócios que querem mais clientes todo mês</Eyebrow>
          <h1 className="font-display display-xl" style={{ margin: '0 0 32px', fontWeight: 500, textWrap: 'balance' }}>
            Tráfego pago que não queima dinheiro. <em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>Que traz cliente.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(245,239,224,0.78)', maxWidth: 720, marginBottom: 44, textWrap: 'pretty' }}>
            A maioria das agências entrega relatório. A Nexus entrega lead qualificado no seu WhatsApp. Estrutura de campanha orientada por dado, criativo que converte e pixel que aprende com o comportamento real do seu cliente.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#formulario" className="btn btn-primary-light">Quero mais clientes <ArrowD /></a>
            <a href="#processo" className="btn btn-ghost-dark">Ver como funciona</a>
          </div>
        </div>

        <div style={{
          marginTop: 100,
          padding: 24,
          background: 'rgba(20,53,36,0.5)',
          border: '1px solid var(--nx-green-line)',
          borderRadius: 'var(--nx-radius)',
          display: 'grid',
          gridTemplateColumns: 'auto repeat(4, 1fr)',
          gap: 24,
          alignItems: 'center',
        }} className="nx-live-strip">
          <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nx-accent)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, background: 'var(--nx-accent)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.6s infinite' }}></span>
            CAMPANHA AEGEAN · ATIVA
          </div>
          {[
            { k: 'Leads / 30d', v: '800+' },
            { k: 'CPL médio', v: 'R$ 6,25' },
            { k: 'Qualificados', v: '44%' },
            { k: 'ROAS', v: '80x' },
          ].map((m, i) => (
            <div key={i} style={{ borderLeft: '1px solid var(--nx-green-line)', paddingLeft: 20 }}>
              <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.55)', marginBottom: 6 }}>{m.k}</div>
              <div className="font-display" style={{ fontSize: 22, color: 'var(--nx-cream)', letterSpacing: '-0.02em' }}>{m.v}</div>
            </div>
          ))}
          <style>{`
            @media (max-width: 900px) { .nx-live-strip { grid-template-columns: 1fr 1fr !important; }
              .nx-live-strip > div:first-child { grid-column: 1 / -1 !important; border-left: none !important; padding-left: 0 !important; }
              .nx-live-strip > div { border-left: none !important; padding-left: 0 !important; }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

function PmObjecao() {
  const rows = [
    { bad: 'Impulsiona post sem estratégia', good: 'Estrutura funil completo antes de ativar' },
    { bad: 'Mesmo anúncio para todo mundo', good: '5 ângulos de criativo por campanha' },
    { bad: 'Entrega relatório bonito', good: 'Entrega lead qualificado no WhatsApp' },
    { bad: 'Cobra fee e some', good: 'Otimiza campanha toda semana' },
    { bad: 'Não instala pixel corretamente', good: 'Pixel configurado e validado antes de ativar' },
  ]
  return (
    <section className="surface-cream sec">
      <div className="container-nx">
        <div style={{ maxWidth: 780, marginBottom: 64 }}>
          <Eyebrow>Quebra de objeção</Eyebrow>
          <h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            O problema não é o Meta Ads. <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>É como está sendo usado.</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          border: '1px solid var(--nx-cream-line)',
          borderRadius: 'var(--nx-radius)',
          overflow: 'hidden',
        }} className="nx-obj-grid">
          <div style={{ padding: '20px 32px', background: 'var(--nx-cream-2)', borderBottom: '1px solid var(--nx-cream-line)', borderRight: '1px solid var(--nx-cream-line)' }}>
            <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a13a2c' }}>✗ O que a maioria faz</div>
          </div>
          <div style={{ padding: '20px 32px', background: 'var(--nx-green)', color: 'var(--nx-cream)', borderBottom: '1px solid var(--nx-green-line)' }}>
            <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nx-accent)' }}>✓ O que a Nexus faz</div>
          </div>
          {rows.map((r, i) => (
            <>
              <div key={`bad-${i}`} style={{ padding: '28px 32px', borderRight: '1px solid var(--nx-cream-line)', borderBottom: i < rows.length - 1 ? '1px solid var(--nx-cream-line)' : 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ color: '#a13a2c', fontSize: 18, lineHeight: 1 }}>✗</span>
                <span style={{ fontSize: 16, color: '#5a4040' }}>{r.bad}</span>
              </div>
              <div key={`good-${i}`} style={{ padding: '28px 32px', background: 'var(--nx-green)', color: 'var(--nx-cream)', borderBottom: i < rows.length - 1 ? '1px solid var(--nx-green-line)' : 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ color: 'var(--nx-accent)', fontSize: 18, lineHeight: 1 }}>✓</span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>{r.good}</span>
              </div>
            </>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .nx-obj-grid { grid-template-columns: 1fr !important; }
          .nx-obj-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}

function PmProcesso() {
  const steps = [
    { n: '01', t: 'Diagnóstico', d: 'Mapeamos seu negócio, público-alvo e concorrentes antes de criar qualquer anúncio.' },
    { n: '02', t: 'Estrutura', d: 'Configuramos pixel, públicos, campanhas e criativos com 5 ângulos diferentes.' },
    { n: '03', t: 'Ativação', d: 'Lançamos as campanhas com monitoramento diário na primeira semana.' },
    { n: '04', t: 'Otimização', d: 'Ajustamos semanalmente com base nos dados — o algoritmo aprende, o custo cai.' },
  ]
  return (
    <section id="processo" className="surface-cream-2 sec">
      <div className="container-nx">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="font-display display-lg" style={{ margin: 0, fontWeight: 500, textWrap: 'balance' }}>
            Do diagnóstico ao lead <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>no seu WhatsApp.</em>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="nx-process-line" style={{ position: 'absolute', top: 38, left: '12.5%', right: '12.5%', height: 1, background: 'var(--nx-cream-line)' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }} className="nx-process-grid">
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{
                  width: 76, height: 76,
                  borderRadius: '50%',
                  background: 'var(--nx-green)',
                  color: 'var(--nx-cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Sora', system-ui, sans-serif",
                  fontSize: 26,
                  fontWeight: 500,
                  marginBottom: 28,
                  position: 'relative',
                  zIndex: 2,
                  border: '4px solid var(--nx-cream-soft)',
                }}>{s.n}</div>
                <h3 className="font-display" style={{ fontSize: 26, margin: '0 0 12px', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--nx-green)' }}>{s.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: '#2a3a30', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .nx-process-grid { grid-template-columns: 1fr 1fr !important; }
          .nx-process-line { display: none; }
        }
        @media (max-width: 560px) {
          .nx-process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PmCase() {
  return (
    <section className="surface-dark sec">
      <div className="container-nx">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }} className="nx-two-col">
          <div>
            <Eyebrow light>Resultado real</Eyebrow>
            <h2 className="font-display display-lg" style={{ margin: '0 0 28px', fontWeight: 500, textWrap: 'balance' }}>
              R$ 5.000 investidos.<br/><em style={{ fontStyle: 'italic', color: 'var(--nx-accent)' }}>R$ 400.000 faturados.</em>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(245,239,224,0.78)', marginBottom: 36 }}>
              800+ leads captados em 30 dias. 44% qualificados — possuem ou já possuíram relógio de luxo. Ticket médio por venda: R$ 97.000.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(245,239,224,0.6)', marginBottom: 36, fontStyle: 'italic' }}>
              Isso não é exceção. É o que acontece quando a estrutura certa encontra o mercado certo.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--nx-green-line)', borderBottom: '1px solid var(--nx-green-line)' }}>
              {[
                { v: 'R$ 5k', k: 'Investido em mídia' },
                { v: 'R$ 400k', k: 'Faturados' },
                { v: '30d', k: 'Janela' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '24px 16px', borderRight: i < 2 ? '1px solid var(--nx-green-line)' : 'none' }}>
                  <div className="font-display" style={{ fontSize: 30, fontWeight: 500, color: 'var(--nx-cream)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.v}</div>
                  <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.5)', marginTop: 8 }}>{s.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Placeholder
              label="DASHBOARD META ADS · CASE AEGEAN"
              hint="/public/dashboard-case.jpg · print real com dados anonimizados"
              aspect="4/5"
              dark
            />
          </div>
        </div>

        <div style={{ marginTop: 80, paddingTop: 48, borderTop: '1px solid var(--nx-green-line)' }}>
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--nx-accent)', marginBottom: 28 }}>
            ⊹ Próximos cases — em produção
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="nx-services-grid">
            {[
              { nome: 'Ana Moreira', status: 'Campanha em otimização' },
              { nome: 'Alice', status: 'Mês 2 · escalando' },
              { nome: 'Viviane', status: 'Diagnóstico aprovado' },
            ].map((c, i) => (
              <div key={i} style={{ padding: 28, border: '1px solid var(--nx-green-line)', borderRadius: 'var(--nx-radius)' }}>
                <div className="font-display" style={{ fontSize: 22, color: 'var(--nx-cream)', letterSpacing: '-0.02em', marginBottom: 8 }}>{c.nome}</div>
                <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.55)' }}>{c.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .nx-two-col { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 900px) { .nx-services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function PmForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ segmento: '', cidade: '', investimento: '', nome: '', whats: '' })

  const segmentos = ['Saúde / Estética', 'Comércio / Varejo', 'Profissional liberal', 'Serviços', 'Educação', 'Outro']
  const invests = ['Ainda não invisto', 'Até R$ 500 / mês', 'R$ 500 a R$ 2.000 / mês', 'R$ 2.000 a R$ 5.000 / mês', 'Acima de R$ 5.000 / mês']

  const set = (k, v) => setData({ ...data, [k]: v })

  const submit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá Nexus! Quero gestão de tráfego.\n\n• Segmento: ${data.segmento}\n• Cidade: ${data.cidade}\n• Investimento atual: ${data.investimento}\n• Nome: ${data.nome}\n• WhatsApp: ${data.whats}`
    )
    window.open(`${WHATSAPP_BASE}?text=${msg}`, '_blank')
  }

  const steps = ['Segmento + cidade', 'Investimento atual', 'Contato']

  return (
    <section id="formulario" className="surface-cream sec">
      <div className="container-nx">
        <div style={{ maxWidth: 780, marginBottom: 48 }}>
          <Eyebrow>Próximo passo</Eyebrow>
          <h2 className="font-display display-lg" style={{ margin: '0 0 16px', fontWeight: 500, textWrap: 'balance' }}>
            Chega de queimar verba em <em style={{ fontStyle: 'italic', color: 'var(--nx-green)' }}>anúncio que não converte.</em>
          </h2>
          <p style={{ fontSize: 18, color: '#2a3a30', lineHeight: 1.55 }}>
            Responda 3 perguntas. Nossa equipe analisa e entra em contato com uma estratégia para o seu negócio.
          </p>
        </div>

        <form onSubmit={submit} style={{ background: 'var(--nx-green-deep)', color: 'var(--nx-cream)', padding: '48px', borderRadius: 'var(--nx-radius)', maxWidth: 920 }} className="nx-form-card">
          <div style={{ display: 'flex', gap: 4, marginBottom: 40 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ height: 3, background: i <= step ? 'var(--nx-accent)' : 'var(--nx-green-line)' }}></div>
                <div className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: i === step ? 'var(--nx-accent)' : 'rgba(245,239,224,0.55)' }}>
                  0{i + 1} · {s}
                </div>
              </div>
            ))}
          </div>

          {step === 0 && (
            <div style={{ display: 'grid', gap: 36 }}>
              <div className="field">
                <label style={{ color: 'rgba(245,239,224,0.6)' }}>Qual o segmento do seu negócio? <span style={{ color: 'var(--nx-accent)' }}>· obrigatório</span></label>
                <div className="opts" style={{ marginTop: 8 }}>
                  {segmentos.map(s => (
                    <label key={s} className={`opt ${data.segmento === s ? 'active' : ''}`} style={{ borderColor: data.segmento === s ? 'var(--nx-accent)' : 'var(--nx-green-line)', color: 'var(--nx-cream)', background: data.segmento === s ? 'var(--nx-green-soft)' : 'transparent' }}>
                      <span className="dot"></span>
                      <input type="radio" name="seg" value={s} onChange={() => set('segmento', s)} />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <div className="field">
                <label style={{ color: 'rgba(245,239,224,0.6)' }}>Cidade onde atua</label>
                <input type="text" placeholder="Salvador, BA" value={data.cidade} onChange={e => set('cidade', e.target.value)}
                  style={{ color: 'var(--nx-cream)', borderBottomColor: 'var(--nx-green-line)' }} />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="field">
              <label style={{ color: 'rgba(245,239,224,0.6)' }}>Quanto você investe em mídia paga hoje? <span style={{ color: 'var(--nx-accent)' }}>· crítico para a qualificação</span></label>
              <div className="opts" style={{ marginTop: 8, gridTemplateColumns: '1fr' }}>
                {invests.map(s => (
                  <label key={s} className={`opt ${data.investimento === s ? 'active' : ''}`} style={{ borderColor: data.investimento === s ? 'var(--nx-accent)' : 'var(--nx-green-line)', color: 'var(--nx-cream)', background: data.investimento === s ? 'var(--nx-green-soft)' : 'transparent' }}>
                    <span className="dot"></span>
                    <input type="radio" name="inv" value={s} onChange={() => set('investimento', s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'grid', gap: 28 }}>
              <div className="field">
                <label style={{ color: 'rgba(245,239,224,0.6)' }}>Seu nome</label>
                <input type="text" placeholder="Como podemos te chamar?" value={data.nome} onChange={e => set('nome', e.target.value)} required
                  style={{ color: 'var(--nx-cream)', borderBottomColor: 'var(--nx-green-line)' }} />
              </div>
              <div className="field">
                <label style={{ color: 'rgba(245,239,224,0.6)' }}>WhatsApp para contato</label>
                <input type="tel" placeholder="(71) 9 0000-0000" value={data.whats} onChange={e => set('whats', e.target.value)} required
                  style={{ color: 'var(--nx-cream)', borderBottomColor: 'var(--nx-green-line)' }} />
              </div>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.55)', paddingTop: 12, borderTop: '1px solid var(--nx-green-line)' }}>
                Resumo: {data.segmento || '—'} · {data.cidade || '—'} · {data.investimento || '—'}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, gap: 16, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
              className="btn btn-ghost-dark" style={{ opacity: step === 0 ? 0.3 : 1, cursor: step === 0 ? 'not-allowed' : 'pointer' }}>
              ← Voltar
            </button>
            {step < 2 ? (
              <button type="button" onClick={() => setStep(step + 1)} className="btn btn-primary-light">
                Próximo <ArrowR />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary-light">
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

export default function PerformanceMidia() {
  return (
    <>
      <Nav />
      <main>
        <PmHero />
        <PmObjecao />
        <PmProcesso />
        <PmCase />
        <PmForm />
      </main>
      <Footer />
    </>
  )
}
