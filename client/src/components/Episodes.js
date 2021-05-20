import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { setSeasonEpisodeScene, resetSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'
import { resetEpisodeLines } from '../reducers/episodeLinesReducer'
import { resetSearchLines } from '../reducers/searchLinesReducer'
import { getEpisodes } from '../reducers/episodesReducer'

import {
  Table
} from 'antd'

const Episodes = () => {
  const dispatch = useDispatch()

  const episodes = useSelector(state => state.episodes)

  // reset all
  useEffect(() => {
    dispatch(resetSeasonEpisodeScene())
    dispatch(resetEpisodeLines())
    dispatch(resetSearchLines())
  }, [dispatch])

  useEffect(() => {
    dispatch(getEpisodes())
  }, [])

  if (!episodes) {
    return <div></div>
  }

  const columns = episodes.map((season, i) => {
    return {
      title: `Season ${season._id}`,
      dataIndex: `season${season._id}`,
      name: `season${season._id}`,
    }
  })

  const episodesSimplified = episodes.map((season) => {
    let obj = {}
    season.lines.forEach((episode, i) => {
      obj[episode._id] = episode.episodeTitle
    })
    return obj
  })

  let episodesReordered = {}
  Object.keys(episodesSimplified).forEach(seasonId => {
    Object.keys(episodesSimplified[seasonId]).forEach(episodeId => {
      const episodeObject = {
        seasonId: Number(seasonId) + 1,
        episodeTitle: episodesSimplified[seasonId][episodeId],
      }
      if (Object.keys(episodesReordered).includes(episodeId)) {
        episodesReordered[episodeId].push(episodeObject)
      } else {
        episodesReordered[episodeId] = [episodeObject]
      }
    })
  })

  const dataSource = Object.keys(episodesReordered)
    .map((episodeId, i) => {
      // console.log(episodesReordered[episodeId])
      const obj = { key: i + 1 }
      Object.keys(episodesReordered[episodeId])
        .map(seasonIdKey => { // Starts from 0!
          const episodeObject = episodesReordered[episodeId][Number(seasonIdKey)]
          obj[`season${episodeObject.seasonId}`] = (
            <Link
              style={{ display: 'block' }}
              key={i}
              to={`/seasons/${episodeObject.seasonId}/episodes/${episodeId}/lines`}
              onClick={() => dispatch(setSeasonEpisodeScene([episodeObject.seasonId, episodeId, null]))}
            >
              {`Ep. ${episodeId} - ${episodeObject.episodeTitle}`}
            </Link>
          )
        })
      return obj
    })

  return (
    <div>
      <h2>All Episodes</h2>
      <Table
        columns={columns} dataSource={dataSource}
        pagination={false}
      />
    </div>
  )
}

export default Episodes