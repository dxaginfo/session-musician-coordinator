const jwt = require('jsonwebtoken');
const { User, Profile } = require('../models');
const { v4: uuidv4 } = require('uuid');

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, userType: user.userType },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Register a new user
exports.register = async (req, res) => {
  try {
    const { email, password, userType, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Create user
    const user = await User.create({
      id: uuidv4(),
      email,
      passwordHash: password,
      userType,
      isVerified: false
    });

    // Create profile
    await Profile.create({
      id: uuidv4(),
      userId: user.id,
      displayName: `${firstName} ${lastName}`,
      firstName,
      lastName
    });

    // Generate token
    const token = generateToken(user);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        userType: user.userType
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Update last login
    await user.update({ lastLogin: new Date() });

    // Generate token
    const token = generateToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        userType: user.userType
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get current user
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'email', 'userType', 'isVerified', 'createdAt'],
      include: [{ model: Profile, as: 'profile' }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Placeholder methods for other auth features
exports.forgotPassword = async (req, res) => {
  // Implementation for password reset email
  res.status(200).json({ message: 'Password reset email sent' });
};

exports.resetPassword = async (req, res) => {
  // Implementation for password reset
  res.status(200).json({ message: 'Password reset successful' });
};

exports.verifyEmail = async (req, res) => {
  // Implementation for email verification
  res.status(200).json({ message: 'Email verified successfully' });
};

exports.changePassword = async (req, res) => {
  // Implementation for password change
  res.status(200).json({ message: 'Password changed successfully' });
};

exports.logout = async (req, res) => {
  // Implementation for logout (token invalidation on client side)
  res.status(200).json({ message: 'Logged out successfully' });
};

exports.googleAuth = async (req, res) => {
  // Implementation for Google OAuth
  res.redirect('/api/auth/google/callback');
};

exports.googleAuthCallback = async (req, res) => {
  // Implementation for Google OAuth callback
  res.redirect(process.env.FRONTEND_URL || 'http://localhost:3000');
};