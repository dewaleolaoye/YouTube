import axios from 'axios';

const KEY = 'AIzaSyD69m2EjYxSAvdRmRfQy74eWEaReb52iuQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
