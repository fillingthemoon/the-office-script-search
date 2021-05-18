const linesRouter = require('express').Router()
const Line = require('../models/lineModel')

linesRouter.get('/', async (request, response) => {
  const lines = await Line
    .find({})

  response.json(lines)
})

linesRouter.get('/:id', async (request, response) => {
  const line = await Line.findById(request.params.id)
  response.json(line)
})

module.exports = linesRouter