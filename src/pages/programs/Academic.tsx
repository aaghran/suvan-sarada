import { Helmet } from 'react-helmet-async';
import { BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicProgram = () => {
    return (
        <div className="program-detail-page">
            <Helmet>
                <title>Academic Enrichment - Suvan Sarada</title>
                <meta name="description" content="Boost cognitive skills with Abacus, Mental Maths, Communicative English, and Personality Development." />
            </Helmet>

            <div className="program-hero" style={{ backgroundColor: '#0f766e', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
                <div className="container">
                    <h1>Academic Enrichment</h1>
                    <p>Empowering young minds with essential skills.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className="program-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="program-card">
                        <h3><Brain className="mr-2" /> Cognitive Skills</h3>
                        <p>Abacus Training and Mental Maths to enhance calculation speed, concentration, and memory.</p>
                    </div>

                    <div className="program-card">
                        <h3><BookOpen className="mr-2" /> Communication</h3>
                        <p>Communicative English and Personality Development classes to build confidence and leadership traits.</p>
                    </div>

                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Join Today</Link>
                </div>
            </div>
        </div>
    );
};

export default AcademicProgram;
