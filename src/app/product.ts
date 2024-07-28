// This file is similar to models.py in django

export interface ProductSchema{ 
    productName:string,
    productDescription:string,
    productPrice:number,
    productImage?:string,
    productCategory: string
}

// export type ProductSchema = {
//     productName:string,
//     productDescription:string,
//     productPrice:number,
//     productImage?:string,
//     productCategory: string
// }