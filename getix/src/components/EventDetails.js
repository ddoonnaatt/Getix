import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${eventId}`);
        if (!response.ok) throw new Error('Failed to fetch event details');
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <img src="/img/logo.png" alt="Getix Logo" style={{ width: '150px' }} />
        <h1>Getix Event Details</h1>
      </header>

      <Navbar /> {/* Include Navbar */}

      <div className="container event-details">
        <h1>{event.title}</h1>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Category:</strong> {event.category}</p>
        <p>{event.description}</p>
        <img src={event.imageUrl} alt="Event Image" style={{ width: '200px', height: 'auto' }} />
      </div>

      <footer>
        <p>&copy; 2024 Getix - <a href="/imprint">Imprint</a></p>
      </footer>
    </div>
  );
};

export default EventDetails;
