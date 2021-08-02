import express from 'express';
import bookRoutes from './handlers/books-route';
import userRoutes from './handlers/users-route';

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!');
})

bookRoutes(app);
userRoutes(app);


app.listen(3000, function () {
    console.log(`starting app on: ${port}`);
})
