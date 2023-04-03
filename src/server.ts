require('dotenv').config()
import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import { router } from './routes'
import 'express-async-errors'

//init express
const app = express()

//global middlewares
app.use(cors())
app.use(express.json())
app.use('/api/', router)

//public folder
app.use(express.static('public'))

//Errors
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        //if are error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({status: "error", message:"Internal server error"})
})

//start server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})