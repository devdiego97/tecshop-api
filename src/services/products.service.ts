import { IProduct } from "../interfaces/product.interface";
import { IServiceProducts } from "../interfaces/product.iservice";




export const ServiceProduct:IServiceProducts={
    listAllProducts: function (): IProduct[] | object {
        throw new Error("Function not implemented.");
    },
    getProductById: function (id: number): IProduct | object {
        throw new Error("Function not implemented.");
    },
    createProduct: function (data: Omit<IProduct, "id">, id: number): object {
        throw new Error("Function not implemented.");
    },
    deleteProductId: function (id: number): object {
        throw new Error("Function not implemented.");
    }
}