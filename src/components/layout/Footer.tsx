import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Shuvan Sarada</h3>
                        <p>Where Creativity Meets Excellence.</p>
                        <p>Affiliated with Pracheen Kala Kendra.</p>
                        <div className="social-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                            <a href="https://www.facebook.com/p/Shuvan-Sarada-Multi-Creativity-Centre-61577380889092/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
                            <a href="https://www.instagram.com/shuvansarada" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                            <a href="https://www.youtube.com/@shuvansarada1426" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/programs">Programs</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p><MapPin size={18} /> FE – 494, FE Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700106</p>
                        <p><Phone size={18} /> +91 98765 43210</p>
                        <p><Mail size={18} /> shuvan.sarada@gmail.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Shuvan Sarada. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
