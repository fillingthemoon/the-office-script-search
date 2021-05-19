import React, { useState, useEffect } from 'react'

import episodeService from '../services/episodeService'

const Episode = (props) => {
  const [episodeLines, setEpisodeLines] = useState([])

  const {
    seasonId, episodeId
  } = props

  const fetchData = async () => {
    const results = await episodeService.getEpisode(seasonId, episodeId)
    setEpisodeLines(results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!props.seasonId || !props.episodeId) {
    return <div>No season or episode selected</div>
  }

  return (
    <div>
      <h2>Season: {seasonId}</h2>
      <h2>Episode: {episodeId}</h2>
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
              <td>{searchResult.scene}</td>
              <td>{searchResult.line_text}</td>
              <td>{searchResult.speaker}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Episode