import express from 'express'
import { auth } from '../utilities/auth'

import { createprofile, getallartisans, getallartisansBySkill, getartisansbyState_City_Skill, updateuserprofile, getpainters, getguardners, getcleaners, deleteprofile } from '../controllers/userprofilecontrollers'

const router = express.Router()

router.post('/page', auth, createprofile)

router.put('/update', updateuserprofile)

router.get('/skill', getallartisans)

router.get('/', getallartisansBySkill)

router.get('/search', getartisansbyState_City_Skill)

router.get('/painters/:Painter', getpainters)

router.get('/guardners/:Guardner', getguardners)

router.get('/cleaners/:Cleaner', getcleaners)

router.delete('/delete', deleteprofile)

export default router;





















