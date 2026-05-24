import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PresencaDigital from './pages/PresencaDigital.jsx'
import PerformanceMidia from './pages/PerformanceMidia.jsx'
import SolucoesSobMedida from './pages/SolucoesSobMedida.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presenca-digital" element={<PresencaDigital />} />
      <Route path="/performance-midia" element={<PerformanceMidia />} />
      <Route path="/solucoes-sob-medida" element={<SolucoesSobMedida />} />
    </Routes>
  )
}
