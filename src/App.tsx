// App Root Component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes - placeholders */}
        <Route path="/loja" element={<div className="p-20 text-center">Loja - Em breve</div>} />
        <Route path="/parceiros" element={<div className="p-20 text-center">Parceiros - Em breve</div>} />
        <Route path="/sobre" element={<div className="p-20 text-center">Sobre - Em breve</div>} />
        <Route path="*" element={<div className="p-20 text-center">404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
