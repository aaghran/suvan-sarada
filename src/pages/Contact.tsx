import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        interest: 'music'
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you! We will contact you shortly.');
        setFormData({ name: '', phone: '', interest: 'music' });
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us - Suvan Sarada</title>
                <meta name="description" content="Book a free trial class at Suvan Sarada. Located in Salt Lake, Kolkata." />
            </Helmet>

            <div className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch to book your free trial class today.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-info-form">
                    <div className="contact-details" style={{ marginBottom: '2rem' }}>
                        <h3>Visit Us</h3>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>FE – 494, FE Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700106</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>shuvan.sarada@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>Book a Free Trial</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="interest">Interested Program</label>
                                <select
                                    id="interest"
                                    className="form-select"
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                >
                                    <option value="music">Music & Performance</option>
                                    <option value="dance">Dance & Fitness</option>
                                    <option value="academic">Academic Enrichment</option>
                                    <option value="hobby">Hobby Classes</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Request Callback
                            </button>
                        </form>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.476478953926!2d88.41333831495922!3d22.58220868517781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c4080ca095%3A0x2c2fbe9467e9b391!2sSHUVAN%20SARADA!5e0!3m2!1sen!2sin!4v1707010000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
