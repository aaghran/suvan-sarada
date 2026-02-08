import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="badge" style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: 'var(--radius-full)',
                        marginBottom: '1.5rem',
                        fontSize: '0.875rem',
                        backdropFilter: 'blur(4px)'
                    }}>
                        Affiliated with Pracheen Kala Kendra
                    </span>
                    <h1>Where Creativity Meets Excellence in Salt Lake</h1>
                    <p className="hero-subtitle">
                        Join the premier Multi-Creativity Centre for Music, Dance, Academics, and Arts.
                    </p>
                    <div className="hero-cta">
                        <Link to="/contact" className="btn btn-accent btn-lg">
                            Book a Free Trial <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                        <Link to="/programs" className="btn btn-outline btn-lg">
                            Explore Programs
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
