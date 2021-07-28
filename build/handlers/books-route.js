"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = require("../models/books");
const store = new books_1.BookStore();
const index = async (req, res) => {
    const books = await store.index();
    res.json(books);
};
const bookRoutes = (app) => {
    app.get('/books', index);
};
exports.default = bookRoutes;
