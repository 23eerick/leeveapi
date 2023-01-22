import Products from '../models/productsModel.js'

const getProduct = async (req, res) => {
    const products = await Products.find({})

    return res.status(200).json(products)
}

const createProduct = async (req, res) => {
    const product = req.body

    const newProduct = await Products.create(product)

    return res.status(201).json(newProduct)
}

const deleteProduct = async (req, res) => {
    const id = req.params.id

    await Products.findByIdAndRemove({ _id: id })

    return res.status(200).json({ res: `Product deleted, ${id}` })
}

export {
    getProduct,
    createProduct,
    deleteProduct
}