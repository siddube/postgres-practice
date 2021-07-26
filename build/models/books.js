"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStore = void 0;
const db_1 = __importDefault(require("../db"));
class BookStore {
    async index() {
        try {
            const conn = await db_1.default.connect();
            const sql = 'SELECT * FROM books';
            const result = await conn.query(sql);
            conn.release;
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not get books. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            const conn = await db_1.default.connect();
            const sql = 'SELECT * FROM books WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release;
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not get books. Error: ${err}`);
        }
    }
    async create(b) {
        try {
            const conn = await db_1.default.connect();
            const sql = 'INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *';
            const result = await conn.query(sql, [b.title, b.author, b.total_pages, b.type]);
            const book = result.rows[0];
            conn.release();
            return book;
        }
        catch (err) {
            throw new Error(`Could not get books. Error: ${err}`);
        }
    }
    async delete(id) {
        try {
            const conn = await db_1.default.connect();
            const sql = 'DELETE FROM books WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release;
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not get books. Error: ${err}`);
        }
    }
}
exports.BookStore = BookStore;
;
