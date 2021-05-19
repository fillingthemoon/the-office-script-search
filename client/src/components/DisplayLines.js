import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { setSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'

const DisplayLines = () => {
  const dispatch = useDispatch()
  const searchLines = useSelector(state => state.searchLines)
  const episodeLines = useSelector(state => state.episodeLines)
  const lines = searchLines ? searchLines : episodeLines

  const seasonEpisodeScene = useSelector(state => state.seasonEpisodeScene)

  const [season, episode, scene] = seasonEpisodeScene

  if (!lines) {
    return <div></div>
  }

  return (
    <div>
      <h2>
        {season && `Season ${season}`}
        {episode && ', '}
        {episode &&
          <Link
            replace
            to={`/seasons/${season}/episodes/${episode}/lines`}
            onClick={() => dispatch(setSeasonEpisodeScene([season, episode, null]))}
          >
            Episode {episode}
          </Link>
        }
        {scene && ', '}
        {scene && `Scene ${scene}`}
      </h2>
      <table>
        <thead>
          <tr>
            <th>line_id</th>
            {!season && <th>season</th>}
            {!episode && <th>episode</th>}
            {!scene && <th>scene</th>}
            <th>line_text</th>
            <th>speaker</th>
          </tr>
        </thead>
        <tbody>
          {lines
            .filter(line => !scene || line.scene === scene)
            .map((line, i) =>
              <tr key={i}>
                <td>{line.line_id}</td>
                {!season && <td>{line.season}</td>}
                {!episode &&
                  <td>
                    <Link
                      replace
                      to={`/seasons/${line.season}/episodes/${line.episode}/lines`}
                      onClick={() => dispatch(setSeasonEpisodeScene([line.season, line.episode, null]))}
                    >
                      {line.episode}
                    </Link>
                  </td>
                }
                {!scene &&
                  <td>
                    <Link
                      replace
                      to={`/seasons/${line.season}/episodes/${line.episode}/scenes/${line.scene}/lines`}
                      onClick={() => dispatch(setSeasonEpisodeScene([line.season, line.episode, line.scene]))}
                    >
                      {line.scene}
                    </Link>
                  </td>
                }
                <td>{line.line_text}</td>
                <td>{line.speaker}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayLines