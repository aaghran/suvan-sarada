import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Heart, BookOpen, Palette, Info } from 'lucide-react';
import './Programs.css';

const Programs = () => {
    return (
        <div className="programs-page">
            <Helmet>
                <title>Our Programs - Suvan Sarada</title>
                <meta name="description" content="Explore Music, Dance, Academics, and Hobby classes at Suvan Sarada." />
            </Helmet>

            {/* Hero Section */}
            <div className="program-hero">
                <div className="hero-content">
                    <h1>Discover Your Creative<br />Potential</h1>
                    <p>Join Kolkata's premier multi-creativity centre for Music, Dance, Academics, and Hobbies. Unlock talents you never knew you had.</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">Book a Free Trial</Link>
                        <a href="#schedule" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>View Schedule</a>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Category Filter */}
                <div className="category-bar">
                    <button className="category-btn active"><Music size={18} /> Music & Performance</button>
                    <button className="category-btn"><Heart size={18} /> Dance & Fitness</button>
                    <button className="category-btn"><BookOpen size={18} /> Academic Enrichment</button>
                    <button className="category-btn"><Palette size={18} /> Hobby Classes</button>
                </div>

                {/* Music Section */}
                <section className="program-section">
                    <div className="section-header">
                        <div>
                            <h2>Music & Performance</h2>
                            <p className="text-muted">Master an instrument or find your voice with our expert instructors.</p>
                        </div>
                        <Link to="/programs/music" className="view-all-link">View All Music Classes <ArrowRight size={16} /></Link>
                    </div>
                    <div className="music-grid">
                        {[
                            { title: 'Guitar', desc: 'Acoustic and electric guitar lessons for beginners to advanced players.', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800' },
                            { title: 'Piano & Keyboard', desc: 'Classical and contemporary piano lessons. Certification courses available.', img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800' },
                            { title: 'Tabla', desc: 'Master the rhythm of Indian classical music with expert gurus.', img: 'https://images.unsplash.com/photo-1598377706489-35c6cb8853cb?auto=format&fit=crop&q=80&w=800' },
                            { title: 'Vocals', desc: 'Hindustani classical, Rabindra Sangeet, and modern western vocals.', img: 'https://images.unsplash.com/photo-1525926526162-463879be5d9c?auto=format&fit=crop&q=80&w=800' }
                        ].map((item, idx) => (
                            <div key={idx} className="music-card">
                                <div className="card-image" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}>
                                    <span className="badge-age">Age 4+</span>
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <Link to="/contact" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--color-border)', color: 'var(--color-primary)' }}>Learn More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dance Section */}
                <section className="program-section">
                    <div className="section-header">
                        <div>
                            <h2>Dance & Fitness</h2>
                            <p className="text-muted">Stay fit and express yourself through movement.</p>
                        </div>
                        <Link to="/programs/dance" className="view-all-link">View All Dance Classes <ArrowRight size={16} /></Link>
                    </div>
                    <div className="dance-grid">
                        {[
                            { title: 'Yoga & Meditation', desc: 'Align your mind, body, and soul. Classes available for kids, adults, and seniors.', img: 'https://images.unsplash.com/photo-1588286840104-4bd2a16687ca?auto=format&fit=crop&q=80&w=800' },
                            { title: 'Bharatanatyam', desc: 'Traditional classical dance training focusing on mudras, expressions, and rhythm.', img: 'https://images.unsplash.com/photo-1584966601449-ee4d8c783262?auto=format&fit=crop&q=80&w=800' },
                            { title: 'Aerobics & Zumba', desc: 'High-energy fitness sessions set to upbeat music to keep you moving.', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800' }
                        ].map((item, idx) => (
                            <div key={idx} className="dance-card">
                                <div className="dance-image" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}>
                                    <span className="badge-age" style={{ top: 'auto', bottom: '1rem', right: '1rem' }}>Popular</span>
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <Link to="/contact" className="btn btn-primary" style={{ flex: 1 }}>Book Trial</Link>
                                        <button className="btn btn-outline" style={{ padding: '0.5rem' }}><Info size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Academic & Hobby Split Section */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '5rem' }}>
                    <section>
                        <div className="section-header">
                            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <BookOpen className="text-primary" /> Academic Enrichment
                            </h2>
                        </div>
                        <div className="h-grid" style={{ gridTemplateColumns: '1fr' }}>
                            <div className="h-card">
                                <img src="https://img.freepik.com/free-vector/cute-boy-study-with-laptop-cartoon-icon-illustration-education-technology-icon-concept-isolated-flat-cartoon-style_138676-2184.jpg" alt="Abacus" className="h-image" />
                                <div>
                                    <h3>Abacus & Mental Maths</h3>
                                    <p className="text-muted text-sm mb-2">Boost calculation speed and brain development for children aged 5-12.</p>
                                    <span style={{ fontSize: '0.8rem', color: '#3b82f6', background: '#eff6ff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>New Batch Open</span>
                                </div>
                            </div>
                            <div className="h-card">
                                <img src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-251.jpg" alt="Coding" className="h-image" />
                                <div>
                                    <h3>Coding for Kids</h3>
                                    <p className="text-muted text-sm mb-0">Learn logic, python, and scratch programming interactively.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="section-header">
                            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Palette style={{ color: '#db2777' }} /> Hobby Classes
                            </h2>
                        </div>
                        <div className="h-grid" style={{ gridTemplateColumns: '1fr' }}>
                            <div className="h-card">
                                <div className="h-icon-box" style={{ background: '#fdf2f8' }}>
                                    <Palette size={32} style={{ color: '#db2777' }} />
                                </div>
                                <div>
                                    <h3>Fine Arts & Painting</h3>
                                    <p className="text-muted text-sm mb-0">Oil, acrylic, water color, and sketching classes for all skill levels.</p>
                                </div>
                            </div>
                            <div className="h-card">
                                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" alt="camera" className="h-image" style={{ objectFit: 'cover' }} />
                                <div>
                                    <h3>Photography</h3>
                                    <p className="text-muted text-sm mb-0">Master your DSLR and learn composition, lighting, and editing.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Testimonials */}
            <section className="parents-say">
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>What Parents Say</h2>
                    <div className="review-grid">
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>"My daughter loves her guitar classes here. The teachers are so patient and encouraging!"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>AR</div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0' }}>Anjali R.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#475569' }}>"The best place for abacus in the city. Seen a huge improvement in my son's math scores."</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>RK</div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0' }}>Rahul K.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Start Your Creative Journey Today</h2>
                    <p style={{ opacity: '0.9' }}>Sign up for a free trial class and experience our teaching methodology firsthand. No commitment required.</p>
                    <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" className="cta-input" />
                        <button className="btn" style={{ background: '#0f172a', color: 'white' }}>Get Started</button>
                    </form>
                    <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: '0.7' }}>Or call us at +91 98765 43210</p>
                </div>
            </section>
        </div>
    );
};

export default Programs;
