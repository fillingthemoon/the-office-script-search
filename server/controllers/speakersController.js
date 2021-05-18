const speakersRouter = require('express').Router()
const Line = require('../models/lineModel')

speakersRouter.get('/', async (request, response) => {
  const speakers = await Line
    .aggregate([
      {
        $group: {
          _id: '$speaker',
          firstLineId: {
            $min: "$line_id"
          },
        },
      },
      {
        $sort: {
          firstLineId: 1
        },
      },
    ])

  response.json(speakers)
})

speakersRouter.get('/:id', async (request, response) => {
  const speaker = await Line
    .find({
      speaker:
        { $regex: new RegExp('^' + request.params.id + '$', 'i') }
    },
    // specify which fields to show
    {
      season: 1,
      episode: 1,
      line_text: 1,
    })

  response.json(speaker)
})

module.exports = speakersRouter