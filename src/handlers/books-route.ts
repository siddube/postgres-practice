import express from 'express';
import { Book, BookStore } from '../models/books';

const store = new BookStore();

const index = async (req: express.Request,res: express.Response)=>{
    const books = await store.index();
    res.json(books);
}

const create= async (req:express.Request,res:express.Response)=>{
    try{
        const book:Book={ id:req.body.id,
            title:req.body.title,
            total_pages:req.body.total_pages,
            author: req.body.author,
            type: req.body.type
        }
        const newBook= await store.create(book);
        res.json(newBook);
    }catch(err){
        res.status(400)
        res.json(err)
    }  
}

const bookRoutes = (app:express.Application) => {
    app.get('/books', index);
    app.post('/books',create)
};

export default bookRoutes;