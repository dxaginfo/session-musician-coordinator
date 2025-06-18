const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const profileRoutes = require('./profile.routes');
const projectRoutes = require('./project.routes');
const bookingRoutes = require('./booking.routes');
const paymentRoutes = require('./payment.routes');
const fileRoutes = require('./file.routes');
const reviewRoutes = require('./review.routes');

// Register routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);
router.use('/files', fileRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;