import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ThermometerSun } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(true); // Default hidden at top
    const { scrollY } = useScroll();
    const location = useLocation();

    // Also check on mount
    useEffect(() => {
        const isHome = location.pathname === '/';
        if (!isHome && window.scrollY < 50) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    }, [location.pathname]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const isHome = location.pathname === '/';
        if (!isHome && latest < 50) {
            setHidden(true); // At top: hide (only if NOT home)
        } else {
            setHidden(false); // Scrolled down or Home: show
        }
    });

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Servizi', path: '/servizi' },
        { name: 'Prenota', path: '/prenota' },
        { name: 'Preventivo', path: '/preventivo' },
        { name: 'Contatti', path: '/contatti' },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 glass-nav"
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
                    <ThermometerSun className="w-8 h-8 text-secondary" />
                    <span>Termo<span className="text-secondary">Idraulica</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                location.pathname === link.path ? "text-secondary" : "text-slate-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:+391234567890"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Chiamaci</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors",
                                        location.pathname === link.path ? "text-secondary" : "text-slate-600"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+391234567890"
                                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-base font-bold"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Chiama Ora</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
