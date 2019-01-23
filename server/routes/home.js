const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    name: 'Tali Makovsky',
    about: ['I am a second year student at St. Lawrence University', 'International Student', 'Career Services Intern', 'Hello World!']
  });
});

module.exports = router;