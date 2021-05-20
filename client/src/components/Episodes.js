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

  const dataSource = [{ key: '1' }]
  episodes.forEach((season) => {
    dataSource[0][`season${season._id}`] = (
      season.lines.map((episode, i) =>
        <Link
          style={{ display: 'block' }}
          key={i}
          to={`/seasons/${season._id}/episodes/${episode._id}/lines`}
          onClick={() => dispatch(setSeasonEpisodeScene([season._id, episode._id, null]))}
        >
          {`Ep. ${episode._id}: ${episode.episodeTitle}`}
        </Link>
      )
    )
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