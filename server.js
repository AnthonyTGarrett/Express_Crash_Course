// const express = require('express');
import express from 'express';
// const path = require('path');
import path from 'path';
// const posts = require('./routes/posts');
import routes from './routes/routes.js';

// Trying to make the __dirname variable work with modules
import { fileURLToPath } from 'url';

import logger from './middleware/logger.js';

import errorHandler from './middleware/error.js';

import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;

//Get Directory Name Making the ___dirname work with module js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// Static middleware for serving all html / css things at once
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// Routes
app.use('/api/posts', routes);

// General error for a missing endpoint
app.use(notFound);

// Error Handler Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
