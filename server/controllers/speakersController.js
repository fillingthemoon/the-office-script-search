const speakersRouter = require('express').Router()
const Line = require('../models/lineModel')

speakersRouter.get('/', async (request, response) => {
  const speakers = await Line
    .aggregate([
      {
        $group: {
          _id: '$speaker',
          // firstLineId: {
          //   $min: "$line_id"
          // },
        },
      },
      {
        $sort: {
          _id: 1
        },
      },
    ])

  response.json(speakers)
})

speakersRouter.get('/:speaker_name', async (request, response) => {
  const speaker = await Line
    .find({
      speaker:
        { $regex: new RegExp('^' + request.params.speaker_name + '$', 'i') }
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