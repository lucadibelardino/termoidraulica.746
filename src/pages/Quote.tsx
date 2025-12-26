import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Snowflake, Droplets, Home, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type Step = 'category' | 'details' | 'contact' | 'success';

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfcXyBYP9S2Vj8NOpy3BZi8EhNCDb6oY9KPtzlyGjIqRmh8XA/formResponse';

const FIELD_IDS = {
    category: 'entry.700896625',
    description: 'entry.864693341',
    fullName: 'entry.235223577',
    email: 'entry.287687410',
    phone: 'entry.738990307',
    location: 'entry.1758535097',
};

const categories = [
    { id: 'heating', label: 'Riscaldamento', icon: <Wrench className="w-8 h-8" />, desc: 'Caldaie, Termosifoni, Pompe di calore' },
    { id: 'cooling', label: 'Climatizzazione', icon: <Snowflake className="w-8 h-8" />, desc: 'Condizionatori, Split, Manutenzione' },
    { id: 'plumbing', label: 'Idraulica', icon: <Droplets className="w-8 h-8" />, desc: 'Perdite, Scarichi, Tubature, Rubinetti' },
    { id: 'renovation', label: 'Ristrutturazione', icon: <Home className="w-8 h-8" />, desc: 'Bagni completi, Impianti nuovi' },
];

const Quote = () => {
    const [step, setStep] = useState<Step>('category');
    const [category, setCategory] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onDetailsSubmit = () => setStep('contact');

    const onContactSubmit = async (data: any) => {
        setIsSubmitting(true);

        try {
            // Use URLSearchParams instead of FormData for better compatibility
            const params = new URLSearchParams();

            // Map fields to Google Form IDs
            // Ensure category matches exactly what's in the form (if multiple choice)
            const selectedCategoryLabel = categories.find(c => c.id === category)?.label || category || '';

            if (FIELD_IDS.category) params.append(FIELD_IDS.category, selectedCategoryLabel);
            if (FIELD_IDS.description) params.append(FIELD_IDS.description, data.description || '');
            if (FIELD_IDS.fullName) params.append(FIELD_IDS.fullName, data.fullName || '');
            if (FIELD_IDS.email) params.append(FIELD_IDS.email, data.email || '');
            if (FIELD_IDS.phone) params.append(FIELD_IDS.phone, data.phone || '');
            if (FIELD_IDS.location) params.append(FIELD_IDS.location, data.location || '');

            // Submit to Google Forms
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params
            });

            // Minimum delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStep('success');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Si è verificato un errore nell\'invio della richiesta. Riprova più tardi o contattaci telefonicamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Richiedi un Preventivo Gratuito</h1>
                    <p className="text-slate-600">Compila il modulo in pochi passaggi per ricevere una stima personalizzata.</p>
                </div>

                {/* Wizard Progress */}
                <div className="w-full bg-slate-200 h-2 rounded-full mb-12 overflow-hidden">
                    <div
                        className="bg-secondary h-full transition-all duration-500 ease-in-out"
                        style={{ width: step === 'category' ? '25%' : step === 'details' ? '50%' : step === 'contact' ? '75%' : '100%' }}
                    />
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                    {step === 'category' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">Di cosa hai bisogno?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setCategory(cat.id); setStep('details'); }}
                                        className="flex flex-col items-center p-8 border border-slate-200 rounded-2xl hover:border-secondary hover:bg-slate-50 hover:shadow-lg transition-all text-center group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-500 group-hover:bg-secondary group-hover:text-white transition-colors">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.label}</h3>
                                        <p className="text-sm text-slate-500">{cat.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 'details' && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <button onClick={() => setStep('category')} className="text-slate-400 text-sm hover:text-slate-600 mb-6">← Indietro</button>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Dettagli Richiesta</h2>
                            <form onSubmit={handleSubmit(onDetailsSubmit)} className="space-y-6">
                                <div className="bg-blue-50 p-4 rounded-xl text-blue-800 text-sm mb-6 flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                    Stai richiedendo un preventivo per: <strong>{categories.find(c => c.id === category)?.label}</strong>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Descrizione del Lavoro</label>
                                    <textarea
                                        {...register("description", { required: true })}
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all min-h-[150px]"
                                        placeholder="Descrivi il problema o il tipo di installazione che ti serve. Includi dettagli come marca/modello se conosciuti."
                                    />
                                    {errors.description && <span className="text-red-500 text-xs">Questo campo è obbligatorio</span>}
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button type="submit" className="px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-colors flex items-center gap-2">
                                        Continua <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {step === 'contact' && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <button onClick={() => setStep('details')} className="text-slate-400 text-sm hover:text-slate-600 mb-6">← Indietro</button>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">I Tuoi Contatti</h2>
                            <form onSubmit={handleSubmit(onContactSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                                        <input
                                            {...register("fullName", { required: true })}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                            placeholder="Mario Rossi"
                                        />
                                        {errors.fullName && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Email</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                            placeholder="mario@email.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Telefono</label>
                                        <input
                                            {...register("phone", { required: true })}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                            placeholder="+39 333 1234567"
                                        />
                                        {errors.phone && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Città/Zona</label>
                                        <input
                                            {...register("location", { required: true })}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                        />
                                        {errors.location && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 flex gap-3 items-start">
                                    <div className="bg-blue-100 p-2 rounded-full shrink-0">
                                        <CheckCircle className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Inviando la richiesta dichiari di aver letto e accettato la <Link to="/privacy" className="font-bold text-slate-900 underline hover:text-secondary" target="_blank">Privacy Policy</Link>.
                                    </p>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Invia Richiesta'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {step === 'success' && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-12 h-12 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Richiesta Inviata!</h2>
                            <p className="text-slate-600 max-w-md mx-auto mb-8">
                                Abbiamo ricevuto i dettagli del tuo progetto. Un nostro tecnico analizzerà la richiesta e ti invierà un preventivo dettagliato entro 24 ore.
                            </p>
                            <Link to="/" className="px-8 py-3 border border-slate-300 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                                Torna alla Home
                            </Link>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Quote;
