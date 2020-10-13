import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID DToNxD5ijniP_t_dUKfHaa0-zoF90cTJsejUkce62ZA'
  }
})