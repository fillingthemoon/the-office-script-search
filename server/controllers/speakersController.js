const speakersRouter = require('express').Router()
const Line = require('../models/lineModel')

const speakers = Line
  .aggregate([
    {
      $group: {
        _id: '$speaker'
      },
    },
    {
      $match: {
        _id: 'Erin'
      }
    },
    {
      $lookup: {
        from: 'lines',
        localField: '_id',
        foreignField: 'speaker',
        as: 'lines',
      }
    },
    {
      $sort: {
        _id: 1
      },
    },
  ])

speakersRouter.get('/', async (request, response) => {
  const speakersAwaited = await speakers

    response.json(speakersAwaited)
})

speakersRouter.get('/:id', async (request, response) => {
  const line = await Line.findById(request.params.id)
  response.json(line)
})

module.exports = speakersRouter