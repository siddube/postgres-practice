import express from 'express';
import { Book, BookStore } from '../models/books';

const store = new BookStore();

const index = async (req: express.Request,res: express.Response)=>{
    const books = await store.index();
    res.json(books);
}

const bookRoutes = (app:express.Application) => {
    app.get('/books', index);
};

export default bookRoutes;