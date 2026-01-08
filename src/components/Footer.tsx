import { ThermometerSun, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
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
                        Soluzioni professionali per il tuo comfort domestico. Operiamo a Torino e dintorni. Impianti idraulici, riscaldamento e ristrutturazioni "chiavi in mano".
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/marco-laviano-89953232/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/393398321087" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
                            <span>Via Assietta, 6,<br />10040 Druento (TO)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-secondary shrink-0" />
                            <a href="tel:+393398321087" className="hover:text-white transition-colors">+39 339 832 1087</a>
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
