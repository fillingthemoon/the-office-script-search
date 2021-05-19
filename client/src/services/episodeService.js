import axios from 'axios'
const baseUrl = '/api/seasons/'

const getEpisodes = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getEpisodeLines = (seasonId, episodeId) => {
  const request = axios.get(`${baseUrl}${seasonId}/episodes/${episodeId}/lines`)
  return request.then(response => response.data)
}

const episodeService = {
  getEpisodes,
  getEpisodeLines,
}

export default episodeService
