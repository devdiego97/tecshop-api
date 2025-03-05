import { Router,Request,Response } from "express";


const Routes=Router()
Routes.get('/products',(req:Request,res:Response)=>{

    res.json('server ok')
})


export default Routes