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
// Route 3: Update an existing note - PUT /api/notes/updatenote-login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {

    // Create a newNote object
    const newNote = {};
    if (title) { newNote.title = title; }
    if (description) { newNote.description = description; }
    if (tag) { newNote.tag = tag; }

    // Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



// Route 4: Delete an existing note - Delete /api/notes/deletenote-login required


// Find the note to be deleted and delete it

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }
    // allow deletion if user is deketeing its own note 
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({ "Success": "Note has been deleted", note: note });

  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
