import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { setSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'

import { Table, Alert } from 'antd'

const DisplayLines = () => {
  const dispatch = useDispatch()
  const searchLines = useSelector(state => state.searchLines)
  const episodeLines = useSelector(state => state.episodeLines)
  const lines = searchLines || episodeLines || []

  const seasonEpisodeScene = useSelector(state => state.seasonEpisodeScene)
  const loadingStatus = useSelector(state => state.loadingStatus)

  const [season, episode, scene] = seasonEpisodeScene
  const episodes = useSelector(state => state.episodes)

  let columns = [
    {
      title: 'Line Id',
      dataIndex: 'line_id',
      name: 'line_id',
    },
    {
      title: 'Season',
      dataIndex: 'season',
      name: 'season',
    },
    {
      title: 'Episode',
      dataIndex: 'episode',
      name: 'episode',
    },
    {
      title: 'Scene',
      dataIndex: 'scene',
      name: 'scene',
    },
    {
      title: 'Line',
      dataIndex: 'line_text',
      name: 'line_text',
    },
    {
      title: 'Character',
      dataIndex: 'speaker',
      name: 'speaker',
      sorter: {
        compare: (a, b) => a.speaker.localeCompare(b.speaker),
        multiple: 1,
      },
    },
  ]

  // Conditionally render the season, episode, and scene columns
  columns = columns.filter(col => !season ? true : col.name !== 'season')
    .filter(col => !episode ? true : col.name !== 'episode')
    .filter(col => !scene ? true : col.name !== 'scene')

  const dataSource = lines
    .filter(line => !scene || line.scene === scene)
    .map((line, i) => {
      return {
        key: i,
        line_id: line.line_id,
        season: line.season,
        episode: (
          <Link
            replace
            to={`/seasons/${line.season}/episodes/${line.episode}/lines`}
            onClick={() => dispatch(setSeasonEpisodeScene([line.season, line.episode, null]))}
          >
            {line.episode}
          </Link>
        ),
        scene: (
          <Link
            replace
            to={`/seasons/${line.season}/episodes/${line.episode}/scenes/${line.scene}/lines`}
            onClick={() => dispatch(setSeasonEpisodeScene([line.season, line.episode, line.scene]))}
          >
            {line.scene}
          </Link>
        ),
        line_text: line.line_text,
        speaker: line.speaker,
      }
    })

  const tableTitle = () => (
    <h2>
      {season && `Season ${season}`}
      {episode && ' - '}
      {episode &&
        <Link
          replace
          to={`/seasons/${season}/episodes/${episode}/lines`}
          onClick={() => dispatch(setSeasonEpisodeScene([season, episode, null]))}
        >
          Episode {episode}: {episodes[season - 1].lines[episode - 1].episodeTitle}
        </Link>
      }
      {scene && ' - '}
      {scene && `Scene ${scene}`}
    </h2>
  )

  const errorMessage = (resultsMsg) => (
    <div>
      <Alert
        type='error'
        message={`Sorry, ${resultsMsg} results to display! Please try something else.`}
        banner
        closable
      />
      <Table
        title={tableTitle}
        columns={columns}
      />
    </div>
  )

  return (
    <div>
      {
        (searchLines && searchLines.length > 500
          && errorMessage('too many')
        )
        ||
        (searchLines && searchLines.length <= 0
          && errorMessage('no')
        )
        ||
        <Table
          title={tableTitle}
          columns={columns} dataSource={dataSource}
          pagination={false}
          loading={loadingStatus}
        />
      }
    </div>
  )
}

export default DisplayLines