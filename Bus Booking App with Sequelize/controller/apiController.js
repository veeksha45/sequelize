const { User, Bus } = require('../models/booking');

// Add User
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add user.' });
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};

// Add Bus
exports.addBus = async (req, res) => {
  try {
    const { name, totalSeats, availableSeats } = req.body;
    const bus = await Bus.create({ name, totalSeats, availableSeats });
    res.status(201).json(bus);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add bus.' });
  }
};

// Get Buses with available seats > given value
exports.getAvailableBuses = async (req, res) => {
  try {
    const seatThreshold = parseInt(req.params.seats);
    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [require('sequelize').Op.gt]: seatThreshold
        }
      }
    });
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch buses.' });
  }
};
