"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = require("../models/books");
const store = new books_1.BookStore();
const addBook = {
    id: 1,
    title: 'Freedom From Known',
    total_pages: 250,
    author: 'Jiddu Krishnamurti',
    type: 'Philosophy'
};
describe("Book Model", () => {
    console.log();
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });
    it('create method should add a book', async () => {
        const result = await store.create(addBook);
        expect(result).toEqual({
            id: 1,
            title: 'Freedom From Known',
            total_pages: 250,
            author: 'Jiddu Krishnamurti',
            type: 'Philosophy'
        });
    });
    /*
    it('index method should return a list of books', async () => {
      const result = await store.index();
      expect(result).toEqual([{
        id: 1,
        title: 'Freedom From Known',
        total_pages: 250,
        author: 'Jiddu Krishnamurti',
        type: 'Philosophy'
      }]);
    });
  
    it('show method should return the correct book', async () => {
      const result = await store.show(1);
      expect(result).toEqual({
        id: 1,
        title: 'Freedom From Known',
        total_pages: 250,
        author: 'Jiddu Krishnamurti',
        type: 'Philosophy'
      });
    });
  
    it('delete method should remove the book', async () => {
      store.delete(1);
      const result = await store.index()
  
      expect(result).toEqual([]);
    });
    */
});
