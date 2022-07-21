import express from 'express'
import userRoute from './user'
import adminRoute from './admin'
import healthRoute from './health'
// import verifyAPIKey from '../middleware/verifyAPIKey.js'
// import { homepage } from '../controllers/home'

const router = express.Router()

/* GET home page. */
// router.get('/', homepage)

router.use('/user', userRoute)
router.use('/admin', adminRoute)
router.use('/health', healthRoute)

// register page
router.get('/', (req, res) => {
  res.render('frontend/index')
})

// user dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard/index')
})

export default router
