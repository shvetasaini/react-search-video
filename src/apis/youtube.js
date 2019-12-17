import axios from 'axios';

const KEY = 'AIzaSyD_Gl6CZWh61APCAR2cCcQ2Yk7aqbuzx6g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});