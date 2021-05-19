import axios from 'axios'
const baseUrl = '/api/lines/'

const getLines = (searchQuery) => {
  const request = axios.get(baseUrl,
    {
      params: {
        searchQuery: searchQuery
      }
    })
  return request.then(response => response.data)
}

const lineService = {
  getLines,
}

export default lineService
