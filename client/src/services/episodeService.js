import axios from 'axios'
const baseUrl = '/api/seasons/'

const getEpisodes = (searchQuery) => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const episodeService = {
  getEpisodes,
}

export default episodeService
