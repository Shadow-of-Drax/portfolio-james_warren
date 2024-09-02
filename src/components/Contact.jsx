import React from 'react';
import '../styles.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <p>Feel free to reach out if you're interested in working together or if you have any questions.</p>
            <form action="mailto:james.r.warren83@gmail.com" method="post" enctype="text/plain">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;