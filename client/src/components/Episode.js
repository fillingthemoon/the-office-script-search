import React, { useState, useEffect } from 'react'

import episodeService from '../services/episodeService'

import DisplayLines from './DisplayLines'

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
      <DisplayLines lines={episodeLines} />
    </div>
  )
}

export default Episode