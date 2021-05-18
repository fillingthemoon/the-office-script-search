import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import episodeService from '../services/episodeService'

const Episodes = (props) => {
  const [episodes, setEpisodes] = useState([])

  const {
    setSeasonId,
    setEpisodeId
  } = props

  const fetchData = async () => {
    const results = await episodeService.getEpisodes()
    setEpisodes(results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSelect = (seasonId, episodeId) => {
    setSeasonId(seasonId)
    setEpisodeId(episodeId)
  }

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
                  <span key={j}>
                    {j !== 0 && ', '}
                    <Link
                      to={`/seasons/${season._id}/episodes/${episode._id}/lines`}
                      onClick={() => handleSelect(season._id, episode._id)}
                    >
                      {episode._id}
                    </Link>
                  </span>
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