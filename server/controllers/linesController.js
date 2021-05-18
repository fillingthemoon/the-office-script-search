const linesRouter = require('express').Router()
const Line = require('../models/lineModel')

// linesRouter.get('/', async (request, response) => {
//   const lines = await Line
//     .find({})

//   response.json(lines)
// })

linesRouter.get('/:line_id', async (request, response) => {
  const line = await Line
    .find({
      line_id: Number(request.params.line_id)
    })
  response.json(line)
})

linesRouter.get('/', async (request, response) => {
  if (request.query.searchQuery.length < 3) {
    response.json({ error: 'too few characters in search query' })
  }

  const line = await Line
    .find({
      line_text: { 
        $regex: new RegExp(request.query.searchQuery, 'i')
      }
    })
    .sort({
      line_id: 'ascending',
    })
  response.json(line)
})

module.exports = linesRouter