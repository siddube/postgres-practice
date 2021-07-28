"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_route_1 = __importDefault(require("./handlers/books-route"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
books_route_1.default(app);
app.listen(3000, function () {
    console.log(`starting app on: ${port}`);
});
