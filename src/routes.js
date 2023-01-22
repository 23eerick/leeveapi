import { Router } from 'express'
import { getUser, createUser, deleteUser } from './controllers/userController.js'
import { getProduct, createProduct, deleteProduct } from './controllers/productController.js'

const routes = Router()

routes.get('/users', getUser)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)

routes.get('/products', getProduct)
routes.post('/products', createProduct)
routes.delete('/products/:id', deleteProduct)

export default routes