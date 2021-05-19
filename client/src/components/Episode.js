import React, { useState, useEffect } from 'react'

import episodeService from '../services/episodeService'

const Episode = (props) => {
  const [episodeLines, setEpisodeLines] = useState([])
  const [loading, setLoading] = useState(null)

  const {
    seasonId, episodeId
  } = props

  const fetchData = async () => {
    try {
      setLoading('Loading, please wait...')
      const results = await episodeService.getEpisode(seasonId, episodeId)
      setLoading(null)
      setEpisodeLines(results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!props.seasonId || !props.episodeId) {
    return <div>No season or episode selected</div>
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
              <td>{searchResult.scene}</td>
              <td>{searchResult.line_text}</td>
              <td>{searchResult.speaker}</td>
            </tr>
          )}
        </tbody>
      </table>
      {loading != null && <p>{loading}</p>}
    </div>
  )
}

export default Episode