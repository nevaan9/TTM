// Import project dependancies
express = require('express');
bodyParser = require('body-parser');
cors = require('cors');
app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const home_routes = require('./routes/home');

// Initialize Routes
app.use('/home', home_routes);

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