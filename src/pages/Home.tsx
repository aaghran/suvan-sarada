import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Music, Activity, BookOpen, Quote, Shield, Users, Mic } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Shuvan Sarada - Multi-Creativity Centre in Salt Lake</title>
                <meta name="description" content="Kolkata's premier centre for Music, Dance, Academics, and Arts. Join us to nurture your creativity." />
            </Helmet>

            {/* Hero Section */}
            <div className="home-hero">
                <div className="home-hero-content">
                    <div className="badge-affiliate">
                        <span className="badge-dot"></span>
                        Affiliated with Pracheen Kala Kendra
                    </div>
                    <h1>Where Creativity Meets Excellence in Salt Lake</h1>
                    <p>Join a community dedicated to arts, wellness, and academic growth. Experienced mentors, structured curriculum, and a passion for excellence.</p>
                    <div className="hero-cta">
                        <Link to="/programs" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent)', border: 'none' }}>Explore Our Courses</Link>
                        <a href="#schedule" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)' }}>View Schedule</a>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Programs Preview */}
                <section className="section-programs">
                    <div className="section-title">
                        <span>Our Programs</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                            <h2>Holistic Development for All Ages</h2>
                            <Link to="/programs" style={{ color: 'var(--color-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>View All Programs →</Link>
                        </div>
                        <p style={{ maxWidth: '600px', marginTop: '1rem', color: 'var(--color-text-muted)' }}>Discover our diverse range of programs designed to nurture creativity, well-being, and academic success.</p>
                    </div>

                    <div className="program-preview-grid">
                        <div className="programs-card">
                            <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800" alt="Music" className="programs-img" />
                            <div className="programs-content">
                                <div className="programs-icon" style={{ color: '#ea580c', background: '#ffedd5' }}><Music /></div>
                                <h3>Arts & Music</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Master guitar, vocals, and painting with expert guidance. Certified courses aligned with Pracheen Kala Kendra.</p>
                                <Link to="/programs/music" style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>Learn more</Link>
                            </div>
                        </div>

                        <div className="programs-card">
                            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800" alt="Yoga" className="programs-img" />
                            <div className="programs-content">
                                <div className="programs-icon" style={{ color: '#0f766e', background: '#ccfbf1' }}><Activity /></div>
                                <h3>Health & Wellness</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Rejuvenate your mind and body with our specialized yoga and meditation classes designed for stress relief.</p>
                                <Link to="/programs/dance" style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>Learn more</Link>
                            </div>
                        </div>

                        <div className="programs-card">
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" alt="Academic" className="programs-img" />
                            <div className="programs-content">
                                <div className="programs-icon" style={{ color: '#16a34a', background: '#dcfce7' }}><BookOpen /></div>
                                <h3>Academic Enrichment</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Excel in academics with our personalized tutoring and foreign language courses tailored for students.</p>
                                <Link to="/programs/academic" style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>Learn more</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Why Choose Us */}
            <div style={{ background: 'white', padding: '5rem 0' }}>
                <div className="container">
                    <div className="why-grid">
                        <div className="why-image-wrapper">
                            <img src="https://img.freepik.com/free-vector/interaction-between-people-concept-illustration_114360-15336.jpg" alt="Mentoring" className="why-image" />
                        </div>
                        <div className="why-content">
                            <span style={{ color: '#ea580c', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Why Choose Us</span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Excellence in Every Note & Lesson</h2>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="feature-icon-box"><Shield /></div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>State-of-the-Art AC Classrooms</h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Comfortable learning environment designed to keep students focused and relaxed regardless of the weather.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-box"><Mic /></div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Expert Faculty</h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Learn from seasoned professionals with years of teaching and performance experience.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon-box"><Users /></div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Community Focused</h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>We build a supportive community where students can collaborate, perform, and grow together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <section className="section-testimonial">
                <div className="container">
                    <Quote className="quote-icon" />
                    <p className="testimonial-quote">
                        "Learning Guitar at Shuvan Sarada transformed my hobby into a passion. The teachers are incredibly patient and the environment is so inspiring."
                    </p>
                    <div className="author-box">
                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" alt="Rohan Das" className="author-avatar" />
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Rohan Das</h4>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Advanced Guitar Student</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section" style={{ borderRadius: 'var(--radius-lg)', margin: '2rem 1rem' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to start your creative journey?</h2>
                    <p style={{ opacity: '0.9', marginBottom: '2rem' }}>Book a free trial class today and experience our unique teaching methodology firsthand.</p>
                    <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>Book Free Trial</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
