import { Helmet } from 'react-helmet-async';
import { Heart, Activity } from 'lucide-react'; // Using alternative icons as 'Dance' might not be available
import { Link } from 'react-router-dom';

const DanceProgram = () => {
    return (
        <div className="program-detail-page">
            <Helmet>
                <title>Dance & Fitness - Suvan Sarada</title>
                <meta name="description" content="Stay fit and express yourself with Yoga, Aerobics, Meditation, and various Dance forms." />
            </Helmet>

            <div className="program-hero" style={{ backgroundColor: 'var(--color-accent-dark)', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
                <div className="container">
                    <h1>Dance & Fitness</h1>
                    <p>Harmonize your body and mind.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className="program-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="program-card">
                        <h3><Activity className="mr-2" /> Fitness & Wellness</h3>
                        <p>Yoga, Aerobics, and Meditation classes designed for all age groups to ensure physical and mental well-being.</p>
                    </div>

                    <div className="program-card">
                        <h3><Heart className="mr-2" /> Dance Forms</h3>
                        <p>Explore various dance forms including Bharatnatyam, Kathak, Creative, and Bollywood dance.</p>
                    </div>

                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Book a Trial Class</Link>
                </div>
            </div>
        </div>
    );
};

export default DanceProgram;
