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
  const line = await Line
    .find({
      line_text: { 
        $regex: new RegExp(request.query.searchQuery.toLowerCase(), 'i')
      }
    })
  response.json(line)
})

module.exports = linesRouter