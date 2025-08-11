import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import MockArticle from './pages/MockArticle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/board-members" element={<Team />} />
        <Route path="/commitee-members" element={<Team />} />
        <Route path="/initiatives" element={<Team />} />
        <Route path="/mock-article" element={<MockArticle />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
