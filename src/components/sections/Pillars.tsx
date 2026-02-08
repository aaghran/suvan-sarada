import { Link } from 'react-router-dom';
import { Music, Heart, BookOpen, ArrowRight } from 'lucide-react'; // Using icons
import './Pillars.css';

const Pillars = () => {
    const pillars = [
        {
            icon: <Music size={40} />,
            title: 'Arts & Music',
            description: 'Master instruments like Guitar, Piano, Tabla, and express yourself through various Dance forms.',
            link: '/programs#music'
        },
        {
            icon: <Heart size={40} />,
            title: 'Health & Wellness',
            description: 'Find your inner peace with Yoga, Meditation, and stay fit with Aerobics.',
            link: '/programs#wellness'
        },
        {
            icon: <BookOpen size={40} />,
            title: 'Academic Enrichment',
            description: 'Boost cognitive skills with Abacus, Mental Maths, and Personality Development.',
            link: '/programs#academic'
        }
    ];

    return (
        <section className="section pillars">
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <span className="badge" style={{ color: 'var(--color-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Core Pillars</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Holistic Development for All Ages</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>We believe in nurturing every aspect of growth through creativity, health, and education.</p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="pillar-card">
                            <div className="pillar-icon">
                                {pillar.icon}
                            </div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                            <Link to={pillar.link} className="pillar-link">
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
