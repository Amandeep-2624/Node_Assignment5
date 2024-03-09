const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // Assuming 'users.html' is in the 'public' directory
app.use(express.static('views')); // Assuming 'users.html' is in the 'views' directory

app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/userRoutes');
const createRoutes=require('./routes/createRoutes');

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/create',createRoutes)

// 404 Handler
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
