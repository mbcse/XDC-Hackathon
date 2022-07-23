import express from 'express'
import { getEvent, createEvent } from '../../controllers/user'
import { uploadEventPass } from '../../services/fileUpload.js'
import verifyLoggedIn from '../../middleware/verifyLoggedIn.js'

const router = express.Router()

router.get('/', getEvent)
router.post('/', verifyLoggedIn, uploadEventPass.single('eventPassImage'), createEvent)

export default router
