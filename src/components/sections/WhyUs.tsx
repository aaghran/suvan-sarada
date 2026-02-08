import { Thermometer, Heart, Award, IndianRupee } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    const features = [
        {
            icon: <Thermometer size={32} />,
            title: 'AC Classrooms',
            description: 'Comfortable learning environment for focused practice.'
        },
        {
            icon: <Heart size={32} />,
            title: 'Caring Staff',
            description: 'A safe, disciplined, and nurturing atmosphere for children.'
        },
        {
            icon: <Award size={32} />,
            title: 'Expert Faculty',
            description: 'Learn from domain experts and experienced performers.'
        },
        {
            icon: <IndianRupee size={32} />,
            title: 'Affordable Fees',
            description: 'Quality education accessible to everyone in the community.'
        }
    ];

    return (
        <section className="section why-us">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Why Choose Us?</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                        We provide the best facilities and guidance to help you or your child excel.
                    </p>
                </div>

                <div className="why-us-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
