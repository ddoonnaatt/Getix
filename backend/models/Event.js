const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Event = sequelize.define('Event', {
  EventID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  StartDateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  EndDateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  EventType: {
    type: DataTypes.ENUM('Concert', 'SportsEvent', 'TheaterEvent'),
    allowNull: false
  },
  OrganizerID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'EventOrganizers',
      key: 'EventOrganizerID'
    },
    allowNull: true
  }
}, {
  tableName: 'Events',
  timestamps: false
});

module.exports = Event;
