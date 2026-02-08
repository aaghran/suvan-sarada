import { Helmet } from 'react-helmet-async';
import { Mic, Guitar } from 'lucide-react';
import { Link } from 'react-router-dom';

const MusicProgram = () => {
    return (
        <div className="program-detail-page">
            <Helmet>
                <title>Music & Performance - Suvan Sarada</title>
                <meta name="description" content="Learn Guitar, Piano, Tabla, Drums, Violin, Flute, and Singing at Suvan Sarada." />
            </Helmet>

            <div className="program-hero" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
                <div className="container">
                    <h1>Music & Performance</h1>
                    <p>Unleash your musical potential with our expert guidance.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className="program-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="program-card">
                        <h3><Guitar className="mr-2" /> Moral & Instrumental</h3>
                        <p>Master instruments like Spanish & Hawaiian Guitar, Piano, Tabla, Drums, Violin, and Flute.</p>
                    </div>

                    <div className="program-card">
                        <h3><Mic className="mr-2" /> Vocal Training</h3>
                        <p> comprehensive vocal training for classical, modern, and bollwood singing styles.</p>
                    </div>

                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
                </div>
            </div>
        </div>
    );
};

export default MusicProgram;
