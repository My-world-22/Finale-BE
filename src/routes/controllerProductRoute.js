import {product} from '../model/productSchema.js'
//mostra tutti i prodotti
export const getProduct = async (req, res) => {
    const products = await product.find()
    res.status(200).json(products)
};
//mostra singolo prodotto
export const getProductId = async (req, res) =>{
    const products = await product.findById(req.params.id)
    res.status(200).json(products)
}
//posta prodotto
export const postProduct = async (req, res) => {
    const products = await product.create(req.body)
    res.status(200).json(products)
};
// modifica singolo prodotto
export const putProduct = async (req, res) => {
    const product = await product.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(200).json({ message: `update product ${req.params.id} success` })
};
//elimina singolo prodotto
export const deleteProduct =async (req, res) => {
    const product = await product.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: `delete product ${req.params.id} success` })
};