const express = require('express');
const router = express.Router();

// Item Model
const Contact = require('../../models/Contact');

// @route GET api/items
// @desc Get all Items
//@access Public
router.get('/', (req, res) => {
  Contact.find().then(contacts => res.json(contacts));
});
// @route Post api/items
// @desc Create a post
//@access Public
router.post('/', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    tel: req.body.tel,
    email: req.body.email,
  });
  newContact.save().then(contact => res.json(contact));
});
// @route Delete api/items
// @desc Delete a post
//@access Public
router.delete('/:id', (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => contact.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
// @route Delete api/items
// @desc Delete a post
//@access Public
router.put('/:id', (req, res) => {
  Contact.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        tel: req.body.tel,
        email: req.body.email,
      },
    }
  )
    // Contact.findById(req.params.id)
    //   .then(contact => {
    //     contact.name = req.body.name;
    //     contact.tel = req.body.tel;
    //     contact.email = req.body.email;
    //     contact.updateOne(

    //     )
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
