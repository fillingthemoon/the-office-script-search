const episodesRouter = require('express').Router()
const Line = require('../models/lineModel')

episodesRouter.get('/seasons', async (request, response) => {
  const speakers = await Line
    .aggregate([
      {
        $group: {
          _id: '$season',
        },
      },
      {
        $lookup: {
          from: 'lines',
          let: { season: '$_id' }, // localField

          // pipeline to manage lookup-data (episodes)
          pipeline: [
            {
              $match: {
                $expr: {
                  // $season is foreignField
                  // $$season is localField
                  $eq: ['$season', '$$season']
                }
              }
            },
            {
              // group by episodes
              $group: {
                _id: '$episode',
                episodeTitle: {
                  $first: '$title'
                }
              }
            },
            {
              $sort: {
                _id: 1,
              }
            },
          ],
          as: 'lines',
        },
      },
      {
        $sort: {
          _id: 1,
        }
      },
    ])

  response.json(speakers)
})

episodesRouter.get('/seasons/:seasonId/episodes', async (request, response) => {
  // get specific season
  const season = Number(request.params.seasonId)

  const speakers = await Line
    .aggregate([
      {
        $match: {
          season: season
        }
      },
      {
        $group: {
          _id: '$season',
        },
      },
      {
        $lookup: {
          from: 'lines',
          let: { season: '$_id' }, // localField

          // pipeline to manage lookup-data (episodes)
          pipeline: [
            {
              $match: {
                $expr: {
                  // $season is foreignField
                  // $$season is localField
                  $eq: ['$season', '$$season']
                }
              }
            },
            {
              // group by episodes
              $group: {
                _id: '$episode',
              }
            },
            {
              $sort: {
                _id: 1,
              }
            },
          ],
          as: 'lines',
        },
      },
      {
        $sort: {
          _id: 1,
        }
      },
    ])

  response.json(speakers)
})

episodesRouter.get('/seasons/:seasonId/episodes/:episodeId/lines', async (request, response) => {
  const episode = await Line
    .find({
      season: Number(request.params.seasonId),
      episode: Number(request.params.episodeId),
    })
    .sort({
      line_id: "ascending",
    })

  response.json(episode)
})

module.exports = episodesRouter