import express from 'express'
import { getEvent, createEvent } from '../../controllers/user'
import { uploadEventPass } from '../../services/fileUpload.js'

const router = express.Router()

router.get('/', getEvent)
router.post('/', uploadEventPass.single('eventPassImage'), createEvent)

export default router
