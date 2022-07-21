import mongoose from 'mongoose'
import config from '../config'

const Schema = mongoose.Schema

const eventSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  eventName: {
    type: String,
    trim: true,
    required: true
  },
  eventOrganizer: {
    type: String,
    trim: true,
    required: true
  },
  eventPassImage: {
    type: String,
    trim: true,
    required: true
  },
  eventTicketPrice: {
    type: String,
    trim: true,
    required: true
  },
  eventTicketBurnValue: {
    type: String,
    trim: true,
    required: true
  },
  eventStartDate: {
    type: String,
    trim: true,
    required: true
  },
  eventEndDate: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Event = mongoose.model('events', eventSchema)
export default Event
