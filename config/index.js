'use strict'

import dotenv from 'dotenv'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import dbConstants from './dbConstants.json'
import contract from './contract.json'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

export default {

  HTTP_STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503
  },

  NETWORK: {
    ETH: {
      RPC_API: process.env.RPC_API
    }
  },

  DATABASE: {
    MONGO: {
      URI: process.env.MONGO_URI
    }
  },

  LOGGER: {
    LEVEL: process.env.LOG_LEVEL || 'debug'
  },

  API_KEY: process.env.API_KEY,

  QUEUE: {
    CONNECTION_URL: process.env.RMQ_CONN_URL
  },

  DB_CONSTANTS: dbConstants,

  KEY_SECURE_PASSWORD: process.env.KEY_SECURE_PASSWORD || 'planetx12345',

  EMAIL: {
    HOST: 'smtp.gmail.com',
    USER: 'eventonchain@gmail.com',
    PASS: 'nibyqovyimdmvczb'
  },

  USERNAME: 'mbcse',

  AWS: {
    ACCESS_KEY_ID: 'AKIAXJSA6ABAY2BGTLE4',
    ACCESS_KEY_SECRET: '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'
  },

  OTP: {
    TIMEOUT_WINDOW: 240 // secs
  },

  SESSION_SECRET: 'eventonchain-secert7675283',

  PINATA: {
    URL: 'https://gateway.pinata.cloud/ipfs/',
    API_KEY: '62339bbfefbce43751af',
    API_SECRET: '292825ec11d2988b8524adb1b3c739ad60bbff5382ea1114c8fb14eb4f3e4c06'
  },

  CONTRACTS: {
    NFT: {
      ADDRESS: contract.NFT_ADDRESS,
      ABI: contract.NFT_ABI
    }
  }

}