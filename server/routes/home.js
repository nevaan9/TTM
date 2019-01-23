const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    about: ['I am a second year student at St. Lawrence University', 'International Student', 'Career Services Intern', 'Hello World '],
    cardColor: 'blue',
    img: 'https://picsum.photos/510/300',
    textColor: 'black'
  });
});

module.exports = router;