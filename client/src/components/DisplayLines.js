import React from 'react'
import { Link } from 'react-router-dom'

import Loading from './Loading'

const DisplayLines = (props) => {

  const {
    seasonEpisodeScene,
    setSeasonEpisodeScene,
    lines,
    loading
  } = props

  const [season, episode, scene] = seasonEpisodeScene

  return (
    <div>
      <h2>
        {season && `Season ${season}`}
        {episode && ', '}
        {episode &&
          <Link
            replace
            to={`/seasons/${season}/episodes/${episode}/lines`}
            onClick={() => setSeasonEpisodeScene([season, episode, null])}
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
                      onClick={() => setSeasonEpisodeScene([line.season, line.episode, null])}
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
                      onClick={() => setSeasonEpisodeScene([line.season, line.episode, line.scene])}
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
      <Loading loading={loading} />
    </div>
  )
}

export default DisplayLines