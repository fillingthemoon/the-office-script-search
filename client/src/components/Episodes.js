import React from 'react'
import { Link } from 'react-router-dom'

const Episodes = (props) => {

  const {
    setSeasonEpisodeScene
  } = props

  const seasonsAndEpisodes = [
    { 'seasonId': 1, 'episodes': [1, 2, 3, 4, 5, 6] },
    { 'seasonId': 2, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
    { 'seasonId': 3, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
    { 'seasonId': 4, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    { 'seasonId': 5, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
    { 'seasonId': 6, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'seasonId': 7, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'seasonId': 8, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'seasonId': 9, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
  ]

  return (
    <div>
      <h2>All Episodes</h2>
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
              <td>{season.seasonId}</td>
              <td>
                {season.episodes.map((episodeId, j) =>
                  <span key={j}>
                    {j !== 0 && ', '}
                    <Link
                      to={`/seasons/${season.seasonId}/episodes/${episodeId}/lines`}
                      onClick={() => setSeasonEpisodeScene([season.seasonId, episodeId, null])}
                    >
                      {episodeId}
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