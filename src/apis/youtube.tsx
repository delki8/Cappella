import axios from 'axios';

const KEY = 'AIzaSyD4UW3saUZ7_3zoY2Z4FR3thciF8Hbb1fQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
