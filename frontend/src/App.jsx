import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import TelaInicial from './TelaInicial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} /> 
        <Route path="/chat" element={<Chat />} /> 
      </Routes>
    </Router>
  );
}

export default App;
