import React, { useState, useEffect } from 'react'

import episodeService from '../services/episodeService'
import DisplayLines from './DisplayLines'

const Episode = (props) => {
  const [episodeLines, setEpisodeLines] = useState([])

  const {
    seasonEpisodeScene,
    setSeasonEpisodeScene,
    setLoading,
  } = props

  const [season, episode, scene] = seasonEpisodeScene

  const fetchData = async () => {
    try {
      setLoading(true)
      const results = await episodeService.getEpisode(season, episode)
      setLoading(false)

      setEpisodeLines(results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!season || !episode) {
    return <div>No season or episode selected.</div>
  }

  return (
    <div>
      <DisplayLines
        seasonEpisodeScene={seasonEpisodeScene}
        setSeasonEpisodeScene={setSeasonEpisodeScene}
        lines={episodeLines}
      />
    </div>
  )
}

export default Episode