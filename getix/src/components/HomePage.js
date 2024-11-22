import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/events');
        const data = await response.json();
        setEvents(data);
        console.log('data: ', data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <section>
          <h2>Featured Events</h2>
          <div className="cards">
            {events.length === 0 ? (
              <p>No events...</p>
            ) : (
              events.map((event) => (
                <div 
                  key={event.Id} 
                  className="card" 
                  onClick={() => handleCardClick(event.EventID)}
                >
                  <div className="card-content">
                    <h3>{event.Title}</h3>
                    <p>{event.Description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        <section>
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us">
            <div className="feature">
              <img src="https://via.placeholder.com/100x100" alt="Wide Selection" />
              <h3>Wide Selection of Events</h3>
              <p>From concerts and theater to sports events, we bring you the best selection of live events. You can find something exciting for every taste!</p>
            </div>
            <div className="feature">
              <img src="https://via.placeholder.com/100x100" alt="Secure Tickets" />
              <h3>Secure Ticketing</h3>
              <p>Your transactions are secure with our trusted ticketing system, ensuring a smooth and safe purchasing experience.</p>
            </div>
            <div className="feature">
              <img src="https://via.placeholder.com/100x100" alt="Customer Support" />
              <h3>24/7 Customer Support</h3>
              <p>Need help with your booking? Our dedicated support team is available round-the-clock to assist you with any inquiries.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
