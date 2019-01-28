const mongoose = require('mongoose');
const { Home } = require('../models/Home');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to DB');
  Home.find({}).then(homeObj => {
    if (!homeObj.length) {
      new Home({
        about: ['HELLO FRIEND'],
        img: 'https://picsum.photos/510/300',
        colors: {
          cardColor: 'white',
          textColor: 'black',
          footerColor: 'white',
        },
        typerText: ["DREAMER"],
        marginAmount: 2,
      }).save().then(() => {
        console.log('Added Home Info!');
      }).catch(e => console.log(e))
    } else {
      console.log('Already Exists');
    }
  });
});

module.exports = {mongoose};