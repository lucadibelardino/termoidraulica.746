import { motion } from 'framer-motion';
import { Wrench, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heatingImg from '../assets/heating.png';
import coolingImg from '../assets/cooling.png';
import bathroomImg from '../assets/bathroom.png';

const Services = () => {
    const serviceList = [
        {
            title: "Riscaldamento",
            desc: "Dall'installazione di nuove caldaie a condensazione alla manutenzione ordinaria. Garantiamo efficienza energetica e sicurezza.",
            features: ["Installazione Caldaie", "Lavaggio Impianti", "Pompe di Calore", "Analisi Fumi", "Valvole Termostatiche"],
            img: heatingImg
        },
        {
            title: "Climatizzazione",
            desc: "Soluzioni per il raffrescamento estivo con installazione di climatizzatori monosplit, multisplit e canalizzati delle migliori marche.",
            features: ["Installazione Climatizzatori", "Ricarica Gas", "Sanificazione Filtri", "Manutenzione", "Assistenza Guasti"],
            img: coolingImg
        },
        {
            title: "Idraulica & Bagno",
            desc: "Interventi idraulici completi, dalla piccola riparazione alla ristrutturazione chiavi in mano del tuo bagno.",
            features: ["Rifacimento Bagni", "Sostituzione Sanitari", "Box Doccia", "Rubinetteria", "Ricerca Perdite"],
            img: bathroomImg
        }
    ];

    return (
        <div className="pt-20">
            <div className="bg-slate-900 py-12 md:py-20 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">I Nostri Servizi</h1>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">Qualità, innovazione e risparmio energetico per la tua casa.</p>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 space-y-16 md:space-y-20">
                {serviceList.map((service, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px]"
                            >
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                            </motion.div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="bg-secondary/10 p-3 rounded-xl w-fit mb-6">
                                <Wrench className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {service.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-slate-700">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/preventivo" className="inline-flex items-center gap-2 text-white bg-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                                Chiedi Preventivo <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
