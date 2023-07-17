import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import usersroute from './routes/usersroute'
import userprofileroute from './routes/userprofileroute'
import cors from 'cors'


dotenv.config();

const apps = express()
apps.use(cors())


apps.use(express.json())
apps.use(cookieParser())
apps.use(logger("dev"))


apps.use('/users', usersroute)

apps.use('/profile', userprofileroute)


apps.listen(process.env.PORT || 3000, () => console.log(`App is listening to ${process.env.PORT || 3000}`))

export default apps














































































































































