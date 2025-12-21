import { Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contattaci</h1>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">Siamo qui per rispondere a ogni tua domanda o emergenza.</p>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Telefono</h3>
                            <p className="text-slate-500 mb-4">Per urgenze e appuntamenti:</p>
                            <a href="tel:+391234567890" className="text-xl font-bold text-secondary hover:underline">+39 123 456 7890</a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                            <p className="text-slate-500 mb-4">Per preventivi e informazioni:</p>
                            <a href="mailto:info@termoidraulica.it?subject=Richiesta%20Informazioni" className="text-lg font-bold text-secondary hover:underline">info@termoidraulica.it</a>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Orari</h3>
                            <p className="text-slate-500">
                                Lun - Ven: 08:00 - 18:00<br />
                                Sabato: 08:00 - 13:00<br />
                                <span className="text-secondary font-bold">Pronto Intervento H24</span>
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Inviaci un Messaggio</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Nome</label>
                                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Cognome</label>
                                    <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Messaggio</label>
                                <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all min-h-[150px]"></textarea>
                            </div>
                            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
                                <Send className="w-5 h-5" /> Invia Messaggio
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
