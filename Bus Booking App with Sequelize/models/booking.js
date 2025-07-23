const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('testDB', 'root', 'veeksha', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Buses
const Bus = sequelize.define('Bus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Bookings
const Booking = sequelize.define('Booking', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seatsBooked: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Payments
const Payment = sequelize.define('Payment', {
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// ===== Export models & sequelize =====
module.exports = {
  sequelize,
  User,
  Bus,
  Booking,
  Payment
};
