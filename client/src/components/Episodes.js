import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { setSeasonEpisodeScene, resetSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'
import { resetEpisodeLines } from '../reducers/episodeLinesReducer'
import { resetSearchLines } from '../reducers/searchLinesReducer'
import { getEpisodes } from '../reducers/episodesReducer'

import {
  Card, List,
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

  // const episodes = [
  //   { 'seasonId': 1, 'episodes': [1, 2, 3, 4, 5, 6] },
  //   { 'seasonId': 2, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
  //   { 'seasonId': 3, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
  //   { 'seasonId': 4, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
  //   { 'seasonId': 5, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
  //   { 'seasonId': 6, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
  //   { 'seasonId': 7, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
  //   { 'seasonId': 8, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
  //   { 'seasonId': 9, 'episodes': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
  // ]

  useEffect(() => {
    dispatch(getEpisodes())
  }, [])

  if (!episodes) {
    return <div></div>
  }

  console.log(episodes)

  const data = episodes
    .map((season) => {
      return {
        title: `Season ${season._id}`,
        episodes: (
          season.lines.map((episode, i) =>
            <Link
              style={{ display: 'block' }}
              key={i}
              to={`/seasons/${season._id}/episodes/${episode._id}/lines`}
              onClick={() => dispatch(setSeasonEpisodeScene([season.seasonId, episode._id, null]))}
            >
              {`Ep. ${episode._id} - ${episode.episodeTitle}`}
            </Link>
          )
        )
      }
    })

  const allEpisodes = () => {

    return (
      <List
        grid={{ gutter: 16 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>{item.episodes}</Card>
          </List.Item>
        )}
      />
    )
  }

  return (
    <div>
      <h2>All Episodes</h2>
      {allEpisodes()}
    </div>
  )
}

export default Episodes