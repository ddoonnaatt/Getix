import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const ImprintPage = () => (
  <div>
    <Header />
    <Navbar />
    <div className="container">
      <section className="imprint-section">
        <h2>Company Information</h2>
        <p><strong>Company Name:</strong> Getix L.L.C.</p>
        <p><strong>Address:</strong> Campus Ring 1, 28759, Bremen, Germany</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> <a href="mailto:info@getix.com">info@getix.com</a></p>
      </section>

      <section className="imprint-section">
        <h2>About the Team</h2>
        <p><strong>Tymofii Gardash</strong> - 2nd year ACS student from Ukraine at Constructor University Bremen</p>
        <p><strong>Balaj Donat</strong> - 3rd year Computer Science student from Kosovo at Constructor University Bremen</p>
        <p><strong>Kostiantyn Bondarenko</strong> - 2nd year ACS student from Ukraine at Constructor University Bremen</p>
      </section>

      <section className="imprint-section">
        <h2>Contact Information</h2>
        <p>If you have any questions, suggestions, or complaints, please contact us:</p>
        <p><strong>Email:</strong> <a href="mailto:support@getix.com">support@getix.com</a></p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Operating Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (CET)</p>
      </section>
    </div>
  </div>
);

export default ImprintPage;