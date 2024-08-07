import express from 'express';
import connectDB from './lib/db.js'; 
import projectRoutes from './routes/projectRoutes.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import chalk from 'chalk';
import cors from 'cors';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); 


// Routes
app.use('/projects', projectRoutes);
//app.use('/auth',authRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.blue(`Server running on port ${PORT}`));
});