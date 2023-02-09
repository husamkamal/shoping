export interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: {
        count: number,
        rate: number
    }
}
export type LimitProduct = { data: Array<Product> }
export type allCategoryProduct = { data: Array<string> }
export type allCategoryWithProduct = Array<string> 
