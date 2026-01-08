import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-slate-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-cd67b9355999?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=20')] opacity-10 bg-cover bg-center" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Parliamo del tuo Progetto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Siamo a tua disposizione a Torino e provincia per preventivi o semplici consigli. Scegli il modo che preferisci per contattarci.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Emergency / Phone Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-secondary text-white p-8 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Phone className="w-32 h-32" />
                        </div>
                        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Urgenze & Telefono</h3>
                        <p className="text-white/80 mb-6">La via più veloce per parlare con noi. Contattaci per informazioni.</p>
                        <a href="tel:+393398321087" className="text-3xl font-bold hover:scale-105 transition-transform inline-block">
                            +39 339 832 1087
                        </a>
                        <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Disponibili
                        </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                    >
                        <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-slate-600">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Email</h3>
                        <p className="text-slate-500 mb-8">Preferisci scriverci? Inviaci una mail direttamente dal tuo client preferito.</p>

                        <a
                            href="mailto:lm.impianti.web@gmail.com"
                            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" /> Invia Email
                        </a>

                        <div className="mt-6 pt-6 border-t border-slate-100 w-full">
                            <p className="text-sm text-slate-500 mb-2">Oppure usa il nostro wizard:</p>
                            <Link to="/preventivo" className="text-secondary font-bold hover:underline flex items-center justify-center gap-1">
                                Richiedi Preventivo Online <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Info & Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                    >
                        <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-slate-600">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Orari & Sede</h3>
                        <div className="text-slate-500 space-y-4 mb-6">
                            <p>
                                <strong className="block text-slate-900 mb-1">Orari Apertura</strong>
                                Lun - Ven: 08:00 - 18:00<br />
                                Sabato: 08:00 - 13:00
                            </p>
                            <p>
                                <strong className="block text-slate-900 mb-1">Sede Operativa</strong>
                                Via Assietta, 6<br />
                                10040 Druento (TO)
                            </p>
                        </div>
                        {/* 
                        <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                            <p className="text-secondary font-bold flex items-center justify-center gap-2">
                                <Clock className="w-4 h-4" /> Pronto Intervento H24
                            </p>
                        </div> 
                        */}
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
