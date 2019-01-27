// Import project dependancies
express = require('express');
bodyParser = require('body-parser');
cors = require('cors');
app = express();
const port = process.env.PORT || 3000;

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes

// GET /home
app.get('/home', (req, res) => {
    res.send({
        about: ['I am a second year student at St. Lawrence University', 'International Student', 'Career Services Intern', 'Hello World '],
        cardColor: 'white',
        img: 'https://picsum.photos/510/300',
        textColor: 'black',
        marginAmount: 2,
        typerText: ["Student","Economist","Traveller","Lover","Dreamer"]
    });
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