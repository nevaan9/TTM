// Import project dependancies
require('./config/config');

express = require('express');
bodyParser = require('body-parser');
cors = require('cors');
app = express();
const port = process.env.PORT || 3000;
const {mongoose} = require('./db/mongoose');
const {Home} = require('./models/Home');

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

// Middleware
app.use(bodyParser.json());
app.use(cors());

// GET /home
app.get('/home', (req, res) => {
    Home.find().then((homeObj) => {
        res.send(homeObj[0]);
    }).catch(e => res.sendStatus(400).send(e));
});

// POST /home
app.post('/home', (req, res) => {
    const data = req.body.homePageData;
    Home.findById(data._id).then((homeObj) => {
        homeObj.about = data.about;
        homeObj.img = data.img;
        homeObj.colors = data.colors;
        homeObj.marginAmount = data.marginAmount;
        homeObj.typerText = data.typerText;
        return homeObj.save();
    }).then((updatedData) => {
        res.sendStatus(200).send(updatedData);
    }).catch(e => new Error(e));
});

// GET /photos
app.get('/photos', (req, res) => {
    res.send([
        {
            url: `https://placekitten.com/${getRandomArbitrary(400, 800)}/${getRandomArbitrary(400, 800)}`,
            caption: 'A cat in the pool',
            albumName: 'SLU',
            albumId: 1
        },
        {
            url: `https://placekitten.com/${getRandomArbitrary(400, 800)}/${getRandomArbitrary(400, 800)}`,
            caption: 'A cat in the pool whwhw',
            albumName: 'Israel',
            albumId: 2
        },
        {
            url: `https://placekitten.com/${getRandomArbitrary(400, 800)}/${getRandomArbitrary(400, 800)}`,
            caption: 'A cat in the pool ahahahshhq dqhdhqdhq dhqeh ehfhe hefhef',
            albumName: 'SLU',
            albumId: 1
        },
        {
            url: `https://placekitten.com/${getRandomArbitrary(400, 800)}/${getRandomArbitrary(400, 800)}`,
            caption: '',
            albumName: 'China',
            albumId: 3
        },
    ]);
});

// GET /blogs
app.get('/blog', (req, res) => {
    blogs = [];
    for (let i = 0; i < 15; i++) {
        blogs.push({
            title: i,
            preview: `Some preview :)`,
            pinned: Math.random()
        })
    }
    const totalData = blogs.length;
    const limit = parseInt(req.query.limit);
    const pageNumber = parseInt(req.query.page);
    res.send({
        blogs: blogs.slice((pageNumber-1)*limit, pageNumber * limit),
        pageCount: parseInt(totalData / limit),
        pinned: blogs.filter(blog => blog.pinned > 0.8)
    })
});

// Handle Production
// Point to which public folder is our entry point
if (process.env.NODE_ENV === 'production') {
    // Use the public folder created via npm run build
    app.use(express.static(__dirname + '/public/'));

    // Handle Single Page Applications
    app.use(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}

// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});