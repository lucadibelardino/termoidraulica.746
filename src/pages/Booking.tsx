import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, MapPin, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useForm } from 'react-hook-form';

type BookingStep = 'date' | 'details' | 'confirmation';

interface BookingFormData {
    date: Date;
    timeSlot: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    issueType: string;
    notes: string;
}

const timeSlots = [
    "08:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00",
    "14:00 - 16:00", "16:00 - 18:00", "18:00 - 20:00"
];

const Booking = () => {
    const [step, setStep] = useState<BookingStep>('date');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log({ ...data, date: selectedDate, timeSlot: selectedSlot });
        setIsSubmitting(false);
        setStep('confirmation');
    };

    const handleDateConfirm = () => {
        if (selectedDate && selectedSlot) {
            setStep('details');
        }
    };

    const css = `
    .rdp { --rdp-cell-size: 45px; --rdp-accent-color: #3b82f6; margin: 0; }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: #eff6ff; color: #3b82f6; }
    .rdp-day_selected { background-color: #3b82f6 !important; font-weight: bold; }
    .rdp-day_today { color: #f97316; font-weight: bold; }
  `;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <style>{css}</style>
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Prenota un Intervento</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Scegli la data e l'orario più comodi per te. I nostri tecnici sono a tua disposizione.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        <StepIndicator current={step} step="date" icon={<Calendar className="w-5 h-5" />} label="Data e Ora" />
                        <div className={`w-12 h-1 bg-slate-200 rounded-full ${step !== 'date' ? 'bg-green-500' : ''}`} />
                        <StepIndicator current={step} step="details" icon={<User className="w-5 h-5" />} label="Dati Personali" />
                        <div className={`w-12 h-1 bg-slate-200 rounded-full ${step === 'confirmation' ? 'bg-green-500' : ''}`} />
                        <StepIndicator current={step} step="confirmation" icon={<CheckCircle className="w-5 h-5" />} label="Conferma" />
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 min-h-[600px]">
                    <AnimatePresence mode="wait">

                        {/* STEP 1: DATE & TIME */}
                        {step === 'date' && (
                            <motion.div
                                key="step-date"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-secondary" /> Seleziona una Data
                                    </h3>
                                    <div className="border border-slate-100 rounded-2xl p-4 inline-block bg-white shadow-sm">
                                        <DayPicker
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            locale={it}
                                            disabled={{ before: new Date() }}
                                            showOutsideDays
                                            className="m-0"
                                        />
                                    </div>
                                    {selectedDate && (
                                        <p className="mt-4 text-slate-600 font-medium">
                                            Hai selezionato: <span className="text-secondary">{format(selectedDate, 'PPP', { locale: it })}</span>
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-secondary" /> Disponibilità Orarie
                                    </h3>
                                    {!selectedDate ? (
                                        <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/50">
                                            <Calendar className="w-12 h-12 mb-4 opacity-20" />
                                            <p>Seleziona prima una data dal calendario</p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    onClick={() => setSelectedSlot(slot)}
                                                    className={cn(
                                                        "p-4 rounded-xl border transition-all text-left group relative overflow-hidden",
                                                        selectedSlot === slot
                                                            ? "border-secondary bg-secondary text-white shadow-lg shadow-secondary/30"
                                                            : "border-slate-200 hover:border-secondary hover:bg-slate-50"
                                                    )}
                                                >
                                                    <span className={cn("font-bold block", selectedSlot === slot ? "text-white" : "text-slate-900")}>
                                                        {slot}
                                                    </span>
                                                    <span className={cn("text-sm block mt-1", selectedSlot === slot ? "text-blue-100" : "text-slate-500")}>
                                                        Disponibili 2 tecnici
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-8 flex justify-end">
                                        <button
                                            disabled={!selectedDate || !selectedSlot}
                                            onClick={handleDateConfirm}
                                            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center gap-2"
                                        >
                                            Prosegui <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: DETAILS */}
                        {step === 'details' && (
                            <motion.div
                                key="step-details"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="p-8 md:p-12"
                            >
                                <div className="max-w-2xl mx-auto">
                                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">Dettagli Intervento</h3>
                                            <p className="text-slate-500 text-sm">Inserisci i tuoi dati per confermare l'appuntamento</p>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <p className="text-sm text-slate-400">Data Scelta</p>
                                            <p className="font-bold text-slate-900">{selectedDate && format(selectedDate, 'PPP', { locale: it })}</p>
                                            <p className="text-secondary font-medium">{selectedSlot}</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Nome e Cognome</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                                    <input
                                                        {...register("name", { required: true })}
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        placeholder="Mario Rossi"
                                                    />
                                                </div>
                                                {errors.name && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Telefono</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                                    <input
                                                        {...register("phone", { required: true })}
                                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        placeholder="+39 333 1234567"
                                                    />
                                                </div>
                                                {errors.phone && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Indirizzo Completo</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                                <input
                                                    {...register("address", { required: true })}
                                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                    placeholder="Via Garibaldi 10, Roma"
                                                />
                                            </div>
                                            {errors.address && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Tipo di Problema</label>
                                            <select
                                                {...register("issueType", { required: true })}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">Seleziona...</option>
                                                <option value="caldaia">Revisione Caldaia</option>
                                                <option value="perdita">Perdita Acqua/Gas</option>
                                                <option value="scarico">Scarico Intasato</option>
                                                <option value="ristrutturazione">Preventivo Ristrutturazione</option>
                                                <option value="altro">Altro</option>
                                            </select>
                                            {errors.issueType && <span className="text-red-500 text-xs">Campo obbligatorio</span>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Note Aggiuntive</label>
                                            <textarea
                                                {...register("notes")}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all min-h-[100px]"
                                                placeholder="Descrivi brevemente il problema..."
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 pt-4">
                                            <button
                                                type="button"
                                                onClick={() => setStep('date')}
                                                className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                                            >
                                                Indietro
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <>Conferma Prenotazione <CheckCircle className="w-5 h-5" /></>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: CONFIRMATION */}
                        {step === 'confirmation' && (
                            <motion.div
                                key="step-conf"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[500px]"
                            >
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Prenotazione Confermata!</h2>
                                <p className="text-slate-600 max-w-md mx-auto mb-8">
                                    Grazie per averci scelto. Riceverai a breve una email di conferma con tutti i dettagli dell'appuntamento.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-2xl w-full max-w-md text-left border border-slate-100 mb-8">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-500">Data</span>
                                        <span className="font-bold text-slate-900">{selectedDate && format(selectedDate, 'PPP', { locale: it })}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-500">Orario</span>
                                        <span className="font-bold text-slate-900">{selectedSlot}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Codice</span>
                                        <span className="font-mono text-secondary">#TRM-{Math.floor(Math.random() * 10000)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setStep('date'); setSelectedDate(undefined); setSelectedSlot(null); }}
                                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                                >
                                    Nuova Prenotazione
                                </button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const StepIndicator = ({ current, step, icon, label }: { current: string, step: string, icon: React.ReactNode, label: string }) => {
    const isActive = current === step;
    const isPast = (current === 'details' && step === 'date') || (current === 'confirmation' && step !== 'confirmation');

    return (
        <div className="flex flex-col items-center gap-2">
            <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors border-2",
                isActive ? "bg-secondary border-secondary text-white" :
                    isPast ? "bg-green-500 border-green-500 text-white" : "bg-white border-slate-200 text-slate-400"
            )}>
                {isPast ? <CheckCircle className="w-5 h-5" /> : icon}
            </div>
            <span className={cn("text-xs font-bold", isActive ? "text-slate-900" : "text-slate-400")}>{label}</span>
        </div>
    );
};

// Simple ArrowRight component if not imported from lucide (it is, but just in case)


export default Booking;
