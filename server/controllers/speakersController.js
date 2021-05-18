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
      // {
      //   $lookup: {
      //     from: 'lines',
      //     localField: '_id',
      //     foreignField: 'speaker',
      //     as: 'lines',
      //   }
      // },
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
    })

  response.json(speaker)
})

module.exports = speakersRouter