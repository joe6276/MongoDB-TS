"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const router = express_1.default.Router();
router.post('/', productController_1.createBook);
router.get('/', productController_1.getBooks);
router.get('/:id', productController_1.getBook);
router.patch('/:id', productController_1.updateBook);
router.delete('/:id', productController_1.deleteBook);
exports.default = router;