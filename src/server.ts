import express from 'express';

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

app.listen(3000, function () {
    console.log(`starting app on: ${port}`);
})
