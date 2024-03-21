import axio from 'axios';

const axios = axio.create({
  baseURL: 'https://weather-api138.p.rapidapi.com/weather',
  headers: {
    'X-RapidAPI-Key': 'eb7bb27235mshacd306e95b6f209p1df946jsnf7e6875d1081',
    'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
  }
});

export default axios;