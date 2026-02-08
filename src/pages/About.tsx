import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Wind, Sparkles, Music, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Us - Shuvan Sarada</title>
                <meta name="description" content="Learn about Shuvan Sarada's mission to provide a safe, disciplined, and creative environment for learners in Salt Lake." />
            </Helmet>

            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-content container">
                    <h1>Nurturing Creativity Since 2009</h1>
                    <p>We are a community-driven centre dedicated to excellence in Music, Dance, Arts, and Academics.</p>
                </div>
            </div>

            <div className="container">

                {/* Mission Section */}
                <section className="mission-section">
                    <div className="mission-grid">
                        <div className="mission-image">
                            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000" alt="Students learning" />
                        </div>
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                At <strong>Shuvan Sarada</strong>, we believe that education extends beyond textbooks. Our mission is to provide a holistic learning environment that nurtures <strong>creativity, discipline, and well-being</strong>.
                            </p>
                            <p>
                                Whether you are a child picking up an instrument for the first time or an adult revisiting a long-lost hobby, we are here to guide you. We strive to create a space where talent is discovered, honed, and celebrated.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>15+</span>
                                    <span className="text-muted text-sm">Years Experience</span>
                                </div>
                                <div style={{ width: '1px', background: '#e2e8f0' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>500+</span>
                                    <span className="text-muted text-sm">Happy Students</span>
                                </div>
                                <div style={{ width: '1px', background: '#e2e8f0' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>15+</span>
                                    <span className="text-muted text-sm">Expert Faculty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Affiliation Banner */}
                <section className="affiliation-banner">
                    <Award size={40} style={{ marginBottom: '1rem' }} />
                    <h3>Affiliated with Pracheen Kala Kendra, Chandigarh</h3>
                    <p>We offer certified courses and hold regular examinations to ensure structured learning and recognition for our students.</p>
                </section>

                {/* Facilities Section */}
                <section className="facilities-section">
                    <div className="facilities-header">
                        <h2>Infrastructure & Facilities</h2>
                        <p className="text-muted">Designed for comfort, designed for learning.</p>
                    </div>
                    <div className="facilities-grid">
                        <div className="facility-card">
                            <div className="facility-icon">
                                <Wind size={32} />
                            </div>
                            <h3>AC Classrooms</h3>
                            <p>Fully air-conditioned classrooms to ensure a comfortable environment for unwavering focus during practice sessions.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">
                                <Shield size={32} />
                            </div>
                            <h3>Safe & Secure</h3>
                            <p>Safety is our top priority. We maintain a secured premise with CCTV surveillance and responsible support staff.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">
                                <Sparkles size={32} />
                            </div>
                            <h3>Hygienic Environment</h3>
                            <p>We take pride in our cleanliness. Regular sanitization and well-maintained facilities for our young learners.</p>
                        </div>
                        <div className="facility-card">
                            <div className="facility-icon">
                                <Music size={32} />
                            </div>
                            <h3>Instruments Provided</h3>
                            <p>Don't have an instrument yet? No worries. We provide specific instruments for practice during class hours.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section" style={{ borderRadius: 'var(--radius-lg)' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Join Us?</h2>
                        <p style={{ opacity: '0.9', marginBottom: '2rem' }}>Visit our centre in Salt Lake or book a free trial class today.</p>
                        <Link to="/contact" className="btn" style={{ background: '#0f172a', color: 'white' }}>Contact Us</Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
