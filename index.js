import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import postRoutes from './routes/postRoutes.js';
import axios from 'axios';

const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  //crud for posts
app.use('/api/posts', postRoutes);

async function getWeather() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&appid=${process.env.WEATHER_KEY}`);
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
  }

app.get('/', async (req, res) => {
    const weather = await getWeather()
    res.send(weather.data);
  });


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
