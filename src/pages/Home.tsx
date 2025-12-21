import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Wrench, Clock, ShieldCheck, Phone, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heatingImg from '../assets/heating.png';
import plumbingImg from '../assets/plumbing.png';
import bathroomImg from '../assets/bathroom.png';
import heroBg from '../assets/hero-bg.png';

const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90" />
                </div>

                <div className="container mx-auto px-4 z-10 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Il tuo Idraulico di <span className="text-secondary">Fiducia</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
                        >
                            Interventi rapidi, professionalità certificata e soluzioni su misura per il tuo comfort domestico. Servizio H24 per emergenze.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link to="/prenota" className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2">
                                Prenota Ora <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/preventivo" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                                Richiedi Preventivo
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <BenefitCard
                            icon={<Clock className="w-10 h-10 text-secondary" />}
                            title="Pronto Intervento H24"
                            description="Siamo operativi 24 ore su 24, 7 giorni su 7, per risolvere guasti urgenti e malfunzionamenti improvvisi."
                        />
                        <BenefitCard
                            icon={<ShieldCheck className="w-10 h-10 text-secondary" />}
                            title="Lavoro Garantito"
                            description="Tutti i nostri interventi sono coperti da garanzia. Utilizziamo solo ricambi originali e materiali di alta qualità."
                        />
                        <BenefitCard
                            icon={<Wrench className="w-10 h-10 text-secondary" />}
                            title="Qualifica Certificata"
                            description="Il nostro team è composto da tecnici specializzati e costantemente aggiornati sulle ultime normative."
                        />
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">I Nostri Servizi</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Offriamo una gamma completa di servizi termo-idraulici per privati e aziende.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Impianti Termici"
                            items={['Installazione caldaie', 'Manutenzione ordinaria', 'Analisi fumi', 'Pompe di calore']}
                            image={heatingImg}
                        />
                        <ServiceCard
                            title="Idraulica Generale"
                            items={['Riparazione perdite', 'Sostituzione rubinetteria', 'Disotturazione scarichi', 'Allacciamenti cucina']}
                            image={plumbingImg}
                        />
                        <ServiceCard
                            title="Ristrutturazione Bagno"
                            items={['Progettazione', 'Posa sanitari', 'Box doccia', 'Impianti idrici']}
                            image={bathroomImg}
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/servizi" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
                            Scopri tutti i servizi <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-secondary">
                                    <Award className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Qualità e Affidabilità</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Offriamo soluzioni impiantistiche di alta qualità, progettate per soddisfare le esigenze specifiche dei nostri clienti. La nostra esperienza garantisce affidabilità e professionalità in ogni progetto.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-accent">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Passione e Professionalità</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                La dedizione di <span className="font-bold text-slate-900">Giorgio Piras</span> e del suo team assicura un servizio che unisce competenza tecnica e attenzione ai dettagli.
                            </p>
                            <Link to="/contatti" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
                                Parla con noi <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-slate-900 z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Hai un'emergenza o serve un preventivo?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Contattaci subito per un sopralluogo gratuito o prenota direttamente online il tuo intervento.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:+391234567890" className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" /> Chiama Ora
                        </a>
                        <Link to="/prenota" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                            Prenota Online
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Subcontracts
const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-8 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50"
    >
        <div className="mb-6 p-4 bg-secondary/10 rounded-2xl w-fit">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
);

const ServiceCard = ({ title, items, image }: { title: string, items: string[], image: string }) => (
    <div className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all">
        <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
            <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default Home;
