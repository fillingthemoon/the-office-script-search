import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import episodeService from '../services/episodeService'

const Episodes = (props) => {

  const {
    setSeasonId,
    setEpisodeId
  } = props

  const seasonsAndEpisodes = [
    { 'season_id': 1, 'episodes': [1, 2, 3, 4, 5, 6] },
    { 'season_id': 2, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
    { 'season_id': 3, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
    { 'season_id': 4, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    { 'season_id': 5, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
    { 'season_id': 6, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'season_id': 7, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'season_id': 8, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'season_id': 9, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
  ]

  const handleSelect = (seasonId, episodeId) => {
    setSeasonId(seasonId)
    setEpisodeId(episodeId)
  }

  return (
    <div>
      <h2>All Episodes!</h2>
      <table>
        <thead>
          <tr>
            <th>seasons</th>
            <th>episodes</th>
          </tr>
        </thead>
        <tbody>
          {seasonsAndEpisodes.map((season, i) =>
            <tr key={i}>
              <td>{season.season_id}</td>
              <td>
                {season.episodes.map((episode_id, j) =>
                  <span key={j}>
                    {j !== 0 && ', '}
                    <Link
                      to={`/seasons/${season.season_id}/episodes/${episode_id}/lines`}
                      onClick={() => handleSelect(season.season_id, episode_id)}
                    >
                      {episode_id}
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