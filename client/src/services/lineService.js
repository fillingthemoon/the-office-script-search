import axios from 'axios'
const baseUrl = '/api/lines/'

const getLine = (searchQuery) => {
  const request = axios.get(baseUrl,
    {
      params: {
        searchQuery: searchQuery
      }
    })
  return request.then(response => response.data)
}

const lineService = {
  getLine,
}

export default lineService
