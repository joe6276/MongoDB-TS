"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../Models/book"));
const getBooks = async (req, res) => {
    try {
        await book_1.default.find().then(result => {
            res.json(result);
        }).catch(err => {
            console.log({
                message: err.message,
                error: err
            });
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.getBooks = getBooks;
const getBook = async (req, res) => {
    try {
        const id = req.params.id;
        await book_1.default.findById(id)
            .then(result => {
            res.json(result);
        }).catch(err => {
            console.log({
                message: err.message,
                error: err
            });
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.getBook = getBook;
const createBook = async (req, res) => {
    try {
        let { bkname, bktitle, bkauthor } = req.body;
        const b = new book_1.default({
            name: bkname,
            title: bktitle,
            author: bkauthor
        });
        await book_1.default.create(b);
        res.json({
            message: "Books added "
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.createBook = createBook;
const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        let { bkname, bktitle, bkauthor } = req.body;
        const b = {
            name: bkname,
            title: bktitle,
            author: bkauthor
        };
        await book_1.default.findByIdAndUpdate(id, b);
        res.json({
            message: "Book Updated Successfully"
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.updateBook = updateBook;
const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        await book_1.default.findByIdAndDelete(id);
        res.json({
            message: "Book Successfully Deleted"
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.deleteBook = deleteBook;
