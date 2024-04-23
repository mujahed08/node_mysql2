import { fetchProducts } from "./dbops/product.js";


const products = await fetchProducts ()
console.log(products)