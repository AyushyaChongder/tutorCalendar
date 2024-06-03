const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/userModel');
const router = express.Router();

const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID');

router.post('/google', async (req, res) => {
  const { token } = req.body;
  
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 'YOUR_GOOGLE_CLIENT_ID',
    });
    const payload = ticket.getPayload();
    
    // Create or find user in your database
    let user = await User.findOne({ email: payload.email });
    if (!user) {
      user = new User({ email: payload.email, name: payload.name });
      await user.save();
    }

    // Return user data and a token
    const userData = {
      email: user.email,
      name: user.name,
      token,
    };
    
    res.status(201).json(userData);
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports = router;
