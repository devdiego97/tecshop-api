import { IProduct } from "./product.interface";



export interface IServiceProducts{
 listAllProducts:()=>IProduct[] | object,
 getProductById:(id:number)=>IProduct | object,
 createProduct:(data:Omit<IProduct,"id">,id:number)=>object
 deleteProductId:(id:number)=>object
}