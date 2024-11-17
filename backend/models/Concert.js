const Concert = sequelize.define('Concert', {
    ConcertID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Headliner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Game: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Concerts',
    timestamps: false
  });
  
  Concert.belongsTo(Event, { foreignKey: 'ConcertID', targetKey: 'EventID' });
  
  module.exports = Concert;
  