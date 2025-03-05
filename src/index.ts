import express from 'express'
import dotenv from 'dotenv'
import Routes from './routes'

dotenv.config()
const api=express()
api.use(Routes)
api.listen(process.env.PORT as string)