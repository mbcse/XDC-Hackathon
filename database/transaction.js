import mongoose from 'mongoose'
import config from '../config'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  _id: String,
  hash: String,
  passId: String,
  type: {
    type: String,
    enum: ['MINT', 'SELL', 'BUY', 'AUCTION', 'BOTH', 'BID', 'OTHER'],
    default: 'OTHER'
  },
  status: {
    type: String,
    enum: ['NONE', 'FAILED', 'SUCCESS', 'PROCESSING'],
    default: 'NONE'
  }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

transactionSchema.methods.saveTransactionHash = async function (hash) {
  try {
    this.hash = hash
    await this.save()
    return this
  } catch (err) {
    throw new Error(err)
  }
}

transactionSchema.methods.setFailed = async function () {
  try {
    this.status = 'FAILED'
    await this.save()
    return this
  } catch (err) {
    throw new Error(err)
  }
}

transactionSchema.methods.setSuccess = async function () {
  try {
    this.status = 'SUCCESS'
    await this.save()
    return this
  } catch (err) {
    throw new Error(err)
  }
}

transactionSchema.methods.setProcessing = async function () {
  try {
    this.status = 'PROCESSING'
    await this.save()
    return this
  } catch (err) {
    throw new Error(err)
  }
}

const Transaction = mongoose.model('transaction', transactionSchema)
export default Transaction
