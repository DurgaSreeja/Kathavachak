const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const auth = require('../middleware/auth');

// @route   POST api/stories
// @desc    Create a story
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const newStory = new Story({
      user: req.user.id,
      title: req.body.title,
      content: req.body.content,
      characters: req.body.characters,
      setting: req.body.setting
    });

    const story = await newStory.save();

    res.json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/stories
// @desc    Get all stories for a user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).sort({ date: -1 });
    res.json(stories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;