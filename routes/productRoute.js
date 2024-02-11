import express from "express"
import { getProduct, postProduct, putProduct, deleteProduct, getProductId } from "./controllerProductRoute.js"
import checkToken from "../middleware/jwtCheckToken.js"

const routerProduct = express.Router()

routerProduct.get('/', getProduct)
routerProduct.get('/:id', getProductId)
routerProduct.post('/', postProduct)
routerProduct.put('/:id', checkToken, putProduct)
routerProduct.delete('/:id', checkToken, deleteProduct)



export default routerProduct