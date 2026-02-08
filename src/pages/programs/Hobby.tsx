import { Helmet } from 'react-helmet-async';
import { Palette, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const HobbyProgram = () => {
    return (
        <div className="program-detail-page">
            <Helmet>
                <title>Hobby Classes - Suvan Sarada</title>
                <meta name="description" content="Explore your creative side with Painting, Photography, Candle Making, and Flower Arrangement." />
            </Helmet>

            <div className="program-hero" style={{ backgroundColor: '#db2777', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
                <div className="container">
                    <h1>Hobby Classes</h1>
                    <p>Discover new passions and express your creativity.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className="program-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="program-card">
                        <h3><Palette className="mr-2" /> Arts & Crafts</h3>
                        <p>Painting (Oil, Acrylic, Water), Candle Making, and Flower Arrangement workshops.</p>
                    </div>

                    <div className="program-card">
                        <h3><Camera className="mr-2" /> Photography</h3>
                        <p>Learn the art of photography, from basics to advanced techniques, to capture the perfect shot.</p>
                    </div>

                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/contact" className="btn btn-primary">Start Creating</Link>
                </div>
            </div>
        </div>
    );
};

export default HobbyProgram;
