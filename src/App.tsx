import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder Pages
const Home = () => <div className="pt-20">Home Page</div>;
const Services = () => <div className="pt-20">Services Page</div>;
const Booking = () => <div className="pt-20">Booking Page</div>;
const Quote = () => <div className="pt-20">Quote Page</div>;
const Contact = () => <div className="pt-20">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Services />} />
            <Route path="/prenota" element={<Booking />} />
            <Route path="/preventivo" element={<Quote />} />
            <Route path="/contatti" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
