// backend/routes/authRoutes.js

const express = require('express');
const passport = require('../auth/googleAuth');
const router = express.Router();

// Route for initiating Google OAuth2 authentication
router.get('/google',
  passport.authenticate('google', { scope: ['email'] }));

// Callback route after successful authentication
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect or respond with a success message
    res.redirect('/calendar');
  });

module.exports = router;
