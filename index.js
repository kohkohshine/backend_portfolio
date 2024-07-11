import express from 'express';
import connectDB from './lib/db.js'; 
import projectRoutes from './routes/projectRoutes.js';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.blue(`Server running on port ${PORT}`));
});