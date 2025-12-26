import { ThermometerSun, MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
                        <ThermometerSun className="w-8 h-8 text-secondary" />
                        <span>LM <span className="text-secondary">Impianti</span></span>
                    </div>
                    <p className="leading-relaxed mb-6">
                        Soluzioni professionali per il tuo comfort domestico. Impianti idraulici, riscaldamento e ristrutturazioni "chiavi in mano".
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Menu Rapido</h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/servizi" className="hover:text-white transition-colors">I Nostri Servizi</Link></li>
                        <li><Link to="/preventivo" className="hover:text-white transition-colors">Richiedi Preventivo</Link></li>
                        <li><Link to="/contatti" className="hover:text-white transition-colors">Contattaci</Link></li>
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Servizi</h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link to="/servizi" className="hover:text-white transition-colors">Installazione Caldaie</Link></li>
                        <li><Link to="/servizi" className="hover:text-white transition-colors">Riparazioni Urgenti</Link></li>
                        <li><Link to="/servizi" className="hover:text-white transition-colors">Ristrutturazione Bagni</Link></li>
                        <li><Link to="/servizi" className="hover:text-white transition-colors">Impianti di Condizionamento</Link></li>
                        <li><Link to="/servizi" className="hover:text-white transition-colors">Manutenzione Ordinaria</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Contatti</h3>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-secondary shrink-0" />
                            <span>Via Roma 123,<br />00100 Roma (RM)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-secondary shrink-0" />
                            <a href="tel:+391234567890" className="hover:text-white transition-colors">+39 123 456 7890</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-secondary shrink-0" />
                            <a href="mailto:info@lmimpianti.it?subject=Richiesta%20Informazioni" className="hover:text-white transition-colors">info@lmimpianti.it</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 pt-8 mt-12 border-t border-slate-900 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} LM Impianti S.r.l.s. Tutti i diritti riservati.</p>
            </div>
        </footer>
    );
};

export default Footer;
