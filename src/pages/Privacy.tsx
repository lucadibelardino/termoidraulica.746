import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Torna alla Home
                </Link>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 prose prose-slate max-w-none">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Informativa sulla Privacy</h1>

                    <p className="text-slate-500 mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                    <h3>1. Titolare del Trattamento</h3>
                    <p>
                        Il titolare del trattamento dei dati è l'azienda <strong>Termoidraulica [Nome Cognome/Ragione Sociale]</strong>.<br />
                        Per qualsiasi richiesta relativa alla privacy, puoi contattarci all'indirizzo email: <a href="mailto:info@termoidraulica.it">info@termoidraulica.it</a>.
                    </p>

                    <h3>2. Tipologia di Dati Raccolti</h3>
                    <p>
                        Raccogliamo esclusivamente i dati forniti volontariamente dagli utenti tramite il modulo di contatto o preventivo (Google Forms), tra cui:
                    </p>
                    <ul>
                        <li>Nome e Cognome</li>
                        <li>Indirizzo email</li>
                        <li>Numero di telefono</li>
                        <li>Città o zona di residenza</li>
                        <li>Informazioni relative alla richiesta (categoria, descrizione del lavoro)</li>
                    </ul>

                    <h3>3. Finalità e Base Giuridica</h3>
                    <p>
                        I dati vengono trattati esclusivamente per le seguenti finalità:
                    </p>
                    <ul>
                        <li>Rispondere alle richieste di informazioni o preventivo inviate dall'utente.</li>
                        <li>Gestire il rapporto pre-contrattuale o contrattuale.</li>
                    </ul>
                    <p>
                        La base giuridica del trattamento è il <strong>consenso</strong> dell'utente (espresso mediante l'invio del modulo) e l'esecuzione di misure precontrattuali.
                    </p>

                    <h3>4. Modalità di Trattamento e Conservazione</h3>
                    <p>
                        I dati sono raccolti tramite piattaforma <strong>Google Forms</strong> e conservati in formato digitale su fogli di calcolo (Excel/Google Sheets) accessibili solo al Titolare.
                    </p>
                    <p>
                        Adottiamo adeguate misure di sicurezza per proteggere i dati da accessi non autorizzati. I dati vengono conservati per il tempo strettamente necessario alla gestione della richiesta e vengono <strong>cancellati manualmente dopo un (1) mese</strong> dall'estinzione dei contatti lavorativi o dal mancato inizio della collaborazione.
                    </p>

                    <h3>5. Destinatari e Trasferimenti</h3>
                    <p>
                        I dati non vengono ceduti a terzi per scopi di marketing.
                        Tuttavia, utilizzando servizi cloud di Google (Forms, Sheets), i dati potrebbero essere trasferiti su server situati al di fuori dello Spazio Economico Europeo (USA), in conformità con le clausole contrattuali standard di <strong>Google LLC</strong>.
                    </p>

                    <h3>6. Diritti dell'Interessato</h3>
                    <p>
                        Ai sensi del GDPR, l'utente ha diritto di:
                    </p>
                    <ul>
                        <li>Chiedere l'accesso, la rettifica o la cancellazione dei propri dati.</li>
                        <li>Opporsi al trattamento o chiederne la limitazione.</li>
                        <li>Revocare il consenso in qualsiasi momento.</li>
                    </ul>
                    <p>
                        Per esercitare tali diritti, scrivi a <a href="mailto:info@termoidraulica.it">info@termoidraulica.it</a>.
                    </p>


                </div>
            </div>
        </div>
    );
};

export default Privacy;
