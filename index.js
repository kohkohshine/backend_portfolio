import express from 'express';
import connectDB from './config/db.js'; 
import itemRoutes from './routes/itemRoutes.js';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.blue(`Server running on port ${PORT}`));
});