import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Initiative from './pages/Initiative';
import RSVP from './pages/RSVP';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> # Sam
        <Route path="/about" element={<About />} /> # Member 1
        <Route path="/contact" element={<Contact />} /> # Sam
        <Route path="/team" element={<Team />} /> # Sam
        <Route path="/events" element={<Events />} /> # Member 2 (List of Events)
        <Route path="/events/:eventId" element={<EventDetails />} /> Member 3 (More Advance, Fetching and Display event details by Id)
        <Route path="/initiatives" element={<Initiative />} /> # Member 4 (Maybe SDG)
        <Route path="/rsvp/;eventId" element={<RSVP />} /> # Member 5 (More Advance, Fetching event details by Id)

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
