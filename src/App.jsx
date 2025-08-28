import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Initiative from './pages/Initiative';
import RSVP from './pages/RSVP';
import Store from './pages/Store';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfService from './pages/TermOfService';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/initiatives" element={<Initiative />} />
        <Route path="/events/rsvp/:eventId" element={<RSVP />} />
        <Route path="/store" element={<Store />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
