import express from 'express'
import userRoute from './user'
import adminRoute from './admin'
import healthRoute from './health'
// import verifyAPIKey from '../middleware/verifyAPIKey.js'
import verifyLoggedIn from '../middleware/verifyLoggedIn.js'
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
router.get('/dashboard', verifyLoggedIn, (req, res) => {
  res.render('dashboard/index')
})

router.get('/addevent', (req, res) => {
  res.render('dashboard/add-event')
})

router.get('/profile', (req, res) => {
  res.render('dashboard/profile')
})

router.get('/eventlist', (req, res) => {
  res.render('dashboard/event-list')
})

export default router
