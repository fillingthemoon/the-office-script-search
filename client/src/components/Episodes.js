import React, { useState, useEffect } from 'react'

import episodeService from '../services/episodeService'

const Episodes = () => {
  const [episodes, setEpisodes] = useState([])

  const fetchData = async () => {
    const results = await episodeService.getEpisodes()
    setEpisodes(results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>All Seasons and Episodes!</h2>
      <table>
        <thead>
          <tr>
            <th>seasons</th>
            <th>episodes</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((season, i) =>
            <tr key={i}>
              <td>{season._id}</td>
              <td>
                {season.lines.map((episode, j) =>
                  <span key={j}>{j !== 0 && ', '}{episode._id}</span>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Episodes