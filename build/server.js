"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var books_route_1 = __importDefault(require("./handlers/books-route"));
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
books_route_1["default"](app);
app.listen(3000, function () {
    console.log("starting app on: " + port);
});
