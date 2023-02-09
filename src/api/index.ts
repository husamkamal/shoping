import axios from "axios";
import { LimitProduct, allCategoryProduct } from "../interfaces";
const baseApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});


export const limitProduct = async (limit: number) => {
  try {
    const response: LimitProduct = await baseApi.get(`/products?limit=${limit}`)
    return response.data 
  } catch (error) {
    return error
  }
} 

export const allCategory = async () => {
  try {
    const response: allCategoryProduct = await baseApi.get("/products/categories")
    return response.data
  } catch (error) {
    return error
  }
} 
export const getProductsSpecificCategory = async (category:string) => {
  try {
    const response: LimitProduct = await baseApi.get(`/products/category/${category}`)
    return response.data
  } catch (error) {
    return error
  }
} 
export const getSingleProducts = async (id:string | undefined) => {
  try {
    const response: any = await baseApi.get(`/products/${id}`)
    return response.data
  } catch (error) {
    return error
  }
} 