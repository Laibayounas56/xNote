const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser');

// Route 1: Get all notes - GET /api/notes/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Route 2: Add a new note - POST /api/notes/addnote
router.post('/addnote', fetchuser, [
  body('title', 'Title must be at least 3 characters').isLength({ min: 3 }),
  body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    // If there are validation errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Create a new note object
    const note = new Notes({
      title,
      description,
      tag,
      user: req.user.id
    });

    // Save the note to DB
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
