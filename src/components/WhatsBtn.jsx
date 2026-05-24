import { WHATSAPP_URL } from '../constants.js'
import { WhatsIcon } from './Icons.jsx'
import { ArrowR } from './Icons.jsx'

export default function WhatsBtn({ children, light = false, className = '' }) {
  const cls = light ? 'btn btn-primary-light' : 'btn btn-primary'
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={`${cls} ${className}`}>
      <WhatsIcon size={16} />
      <span>{children}</span>
      <ArrowR />
    </a>
  )
}
