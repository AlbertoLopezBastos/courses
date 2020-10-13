import axios from 'axios'

const KEY = 'AIzaSyD5fUIE4jjx4p0Bj_jViF9tZAiXjJnGevA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
