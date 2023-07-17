import express from 'express'

import { createuser, loginuser } from '../controllers/userscontrollers'

const router = express.Router()

router.use('/signup', createuser)

router.use('/login', loginuser)



export default router;