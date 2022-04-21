import express from "express"
import { createBook,getBooks,getBook,updateBook,deleteBook } from "../controller/productController"
const router= express.Router()

router.post('/', createBook)
router.get('/', getBooks)
router.get('/:id', getBook)
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook)



export default router