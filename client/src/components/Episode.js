import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import episodeService from '../services/episodeService'
import Loading from './Loading'

const Episode = (props) => {
  const [episodeLines, setEpisodeLines] = useState([])

  const {
    seasonId, episodeId,
    setSceneId,
    loading, setLoading,
  } = props

  const fetchData = async () => {
    try {
      setLoading(true)
      const results = await episodeService.getEpisode(seasonId, episodeId)
      setLoading(false)
      setEpisodeLines(results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!props.seasonId || !props.episodeId) {
    return <div>No season or episode selected.</div>
  }

  return (
    <div>
      <h2>{`Season: ${seasonId}, Episode: ${episodeId}`}</h2>
      <table>
        <thead>
          <tr>
            <th>line_id</th>
            <th>scene</th>
            <th>line_text</th>
            <th>speaker</th>
          </tr>
        </thead>
        <tbody>
          {episodeLines.map((searchResult, i) =>
            <tr key={i}>
              <td>{searchResult.line_id}</td>
              <td>
                <Link
                  to={`/seasons/${seasonId}/episodes/${episodeId}/${searchResult.scene}/lines`}
                  onClick={() => setSceneId(searchResult.scene)}
                >
                  {searchResult.scene}
                </Link>
              </td>
              <td>{searchResult.line_text}</td>
              <td>{searchResult.speaker}</td>
            </tr>
          )}
        </tbody>
      </table>
      <Loading loading={loading} />
    </div>
  )
}

export default Episode