const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQL@2003',
    database: 'user_art',
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Register endpoint
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            res.status(400).send('Email and password are required');
            return;
        }

        const user = { email, password };
        db.query('INSERT INTO artist SET ?', user, (error, results) => {
            if (error) {
                console.error('Error registering user:', error);
                res.status(500).send('Error registering user');
                return;
            }
            res.status(201).send('User registered successfully');
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        db.query('SELECT * FROM artist WHERE email = ?', [email], async (error, results) => {
            if (error) {
                console.error('Error logging in:', error);
                res.status(500).send('Error logging in');
                return;
            }
            if (results.length === 0) {
                res.status(400).send('Invalid email or password');
                return;
            }
            const user = results[0];
            
            if (password !== user.password) {
                res.status(400).send('Invalid email or password');
                return;
            }
            const token = jwt.sign({ id: user.id }, 'your_secret_key');
            res.header('auth-token', token).send({ token });
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    }
});

// Post comment endpoint
app.post('/comments', async (req, res) => {
    try {
        const { artistName, artistId, comment } = req.body;
        if (!artistName || !artistId || !comment) {
            res.status(400).send('Artist name, ID, and comment are required');
            return;
        }
        // Insert the comment into the database
        db.query('INSERT INTO comments (artist_name, artist_id, comment) VALUES (?, ?, ?)', 
            [artistName, artistId, comment], 
            (error, results) => {
                if (error) {
                    console.error('Error posting comment:', error);
                    res.status(500).send('Error posting comment');
                    return;
                }
                res.status(201).send('Comment posted successfully');
            });
    } catch (error) {
        console.error('Error posting comment:', error);
        res.status(500).send('Error posting comment');
    }
});

// Endpoint to handle fetching comments
app.get('/comments', async (req, res) => {
    try {
        // Fetch comments with artist name from the database
        db.query('SELECT * FROM comments', (error, results) => {
            if (error) {
                console.error('Error fetching comments:', error);
                res.status(500).send('Error fetching comments');
                return;
            }
            // Send comments data with artist name to the client
            res.status(200).json(results);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).send('Error fetching comments');
    }
});


app.listen(5000, () => console.log('Server running on port 5000'));
