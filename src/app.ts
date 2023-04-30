import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import { router } from './http/routes'
import 'express-async-errors'

//init express
export const app = express()

//global middlewares
app.use(cors())
app.use(express.json())
app.use('/api/', router)

//public folder
app.use(express.static('./src/public'))

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