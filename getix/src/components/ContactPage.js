import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const ContactPage = () => (
  <div>
    <Header />
    <Navbar />
    <div className="container">
      <section>
        <h2>Get in Touch</h2>
        <p>If you have any questions or inquiries, feel free to contact us through the form below or use our contact information. We're here to help you!</p>
        <div className="contact-form">
          <form action="#" method="post">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <section>
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="info-box">
            <h3>Email Us</h3>
            <p><a href="mailto:support@getix.com">support@getix.com</a></p>
          </div>
          <div className="info-box">
            <h3>Call Us</h3>
            <p>+1 234 567 890</p>
          </div>
          <div className="info-box">
            <h3>Visit Us</h3>
            <p>Campus Ring 1, 28759, Bremen, Germany</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ContactPage;