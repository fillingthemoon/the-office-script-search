import axios from 'axios'
const baseUrl = '/api/seasons/'

const getEpisodes = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getEpisode = (season_id, episode_id) => {
  const request = axios.get(`${baseUrl}${season_id}/episodes/${episode_id}/lines`)
  return request.then(response => response.data)
}

const episodeService = {
  getEpisodes,
  getEpisode,
}

export default episodeService
