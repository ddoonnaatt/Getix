const Event = require('../models/event');
const { Op } = require('sequelize');

const searchEvents = async (req, res) => {
  try {
    const { query } = req.query;
    const events = await Event.findAll({
      where: {
        Title: {
          [Op.like]: `%${query}%`,
        },
      },
      limit: 10,
    });
    res.json(events);
  } catch (error) {
    console.error('Error searching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createEvent = async (req, res) => {
  try {
    const { Title, Description, StartDateTime, EndDateTime, Location, EventType } = req.body;
    const newEvent = await Event.create({
      Title,
      Description,
      StartDateTime,
      EndDateTime,
      Location,
      EventType
    });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Error creating event' });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ message: 'Error fetching event' });
  }
};

// Update an event by ID
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { Title, Description, StartDateTime, EndDateTime, Location, EventType } = req.body;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    event.Title = Title || event.Title;
    event.Description = Description || event.Description;
    event.StartDateTime = StartDateTime || event.StartDateTime;
    event.EndDateTime = EndDateTime || event.EndDateTime;
    event.Location = Location || event.Location;
    event.EventType = EventType || event.EventType;

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event' });
  }
};

// Delete an event by ID
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await event.destroy();
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Error deleting event' });
  }
};

module.exports = {
  searchEvents,
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
