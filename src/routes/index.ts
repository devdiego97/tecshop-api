import { Router,Request,Response } from "express";
import { ProductController } from "../controllers/products.controller";
import { UserController } from "../controllers/user.controller";


const Routes=Router()
Routes.get('/products',ProductController.getAllProducts)
Routes.post('/products',ProductController.addNewProduct)
Routes.get('/products/:id',ProductController.getProductById)
Routes.post('/products/:id',ProductController.updateProductById)
Routes.delete('/products/:id',ProductController.deleteProductById)

Routes.get('/users',UserController.getAllUsers)
Routes.post('/auth/users',UserController.registerNewUser)
Routes.post('/auth/users',UserController.Login)
Routes.get('/users/:id',UserController.getAllUsers)
Routes.put('/users/:id',UserController.updateUserById)
Routes.delete('/users/:id',UserController.deleteUserById)

export default Routes