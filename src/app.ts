import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { IBook, someBookExamples } from './database/IBook';
import path from 'path';

require('dotenv').config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
  res.render("bookList", {books: someBookExamples});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});


export default app;
