import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="section testimonials">
            <div className="container">
                <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">
                        My son learned Guitar here and now runs a successful YouTube channel! The faculty is incredibly supportive and skilled.
                    </p>
                    <div className="testimonial-footer">
                        <p className="testimonial-author">Mrs. Roy</p>
                        <p className="testimonial-role">Proud Parent</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
