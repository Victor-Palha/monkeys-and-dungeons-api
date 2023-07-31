import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import 'express-async-errors'
import { backgroundRouter } from './http/controllers/backgrounds/routes'
import { classesRouter } from './http/controllers/classes/routes'
import { featsRouter } from './http/controllers/feats/routes'
import { itemsRouter } from './http/controllers/items/routes'
import { monstersRouter } from './http/controllers/monsters/routes'

//init express
export const app = express()

//global middlewares
app.use(cors())
app.use(express.json())
//Routes
app.use('/api/', backgroundRouter)
app.use('/api/', classesRouter)
app.use('/api/', featsRouter)
app.use('/api/', itemsRouter)
app.use('/api/', monstersRouter)

//Errors
app.use((err:Error, _req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        //if are error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({status: "error", message:"Internal server error "+err})
})