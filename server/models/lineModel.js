const mongoose = require('mongoose')

const lineSchema = new mongoose.Schema({
  line_id: {
    type: Number,
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  episode: {
    type: Number,
    required: true
  },
  scene: {
    type: Number,
    required: true
  },
  line_text: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    required: true
  },
})

lineSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Line = mongoose.model('Line', lineSchema);

module.exports = Line