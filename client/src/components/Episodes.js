import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { setSeasonEpisodeScene, resetSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'
import { resetEpisodeLines } from '../reducers/episodeLinesReducer'
import { resetSearchLines } from '../reducers/searchLinesReducer'

import { Table, Button } from 'antd'

const epBtnStyle = {
  padding: '0',
  width: '30px',
  margin: '5px',
}

const Episodes = () => {
  const dispatch = useDispatch()

  // reset all
  useEffect(() => {
    dispatch(resetSeasonEpisodeScene())
    dispatch(resetEpisodeLines())
    dispatch(resetSearchLines())
  }, [dispatch])

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

  const columns = [
    {
      title: 'Season',
      dataIndex: 'seasonId',
      name: 'seasonId',
    },
    {
      title: 'Episodes',
      dataIndex: 'episodes',
      name: 'episodes',
    },
  ]

  const dataSource = seasonsAndEpisodes
    .map((season, i) => {
      return {
        key: i,
        seasonId: season.seasonId,
        episodes: (
          season.episodes.map((episodeId, j) =>
            <Link
              key={j}
              to={`/seasons/${season.seasonId}/episodes/${episodeId}/lines`}
              onClick={() => dispatch(setSeasonEpisodeScene([season.seasonId, episodeId, null]))}
            >
              <Button style={epBtnStyle}>{episodeId}</Button>
            </Link>
          )
        )
      }
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