import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Initiative from './pages/Initiative';
import RSVP from './pages/RSVP';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> # Sam
        <Route path="/about" element={<About />} /> # Sam
        <Route path="/contact" element={<Contact />} /> # Sam
        <Route path="/team" element={<Team />} /> # Sam
        <Route path="/events" element={<Events />} /> # Member 1 (List of Events, working with events.js)
        <Route path="/events/:eventId" element={<EventDetails />} /> Member 2 (Fetching and Display event details by ID, working with events.js)
        <Route path="/initiatives" element={<Initiative />} /> # Member 3 (List of Community Nurturing Initiative, SDG Focused, Cross University OutReach)
        <Route path="/rsvp/:eventId" element={<RSVP />} /> # Member 4 (Fetching event details by ID, working with events.js)
        <Route path="/store" element={<Shop />} /> # Member 5 (Ecommerce like, selling at least 6 products)

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
