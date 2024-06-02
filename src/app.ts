import express, { NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { IBook } from './database/IBook';
import { someBookExamples } from "./database/someBookExamples";
import path from 'path';
import { bookRouter } from './routers/BookRouter';
import {Request, Response} from "express";
import { openConnection } from './database/open-connection';
import { putExampleBooksInDb } from './database/book-crud';

require('dotenv').config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan("dev"));
app.use(cors());

// routes
app.get("/", (req, res) => {
	res.render("bookList", { books: someBookExamples });
});

/* Continue Task 1*/
app.use("/books", bookRouter);
/* End Task 1*/

/* Start Task 2 */

/* Continue Task 2 in BookController.ts */

const port = process.env.PORT || 5000;

app.listen(port, () => {
	/* eslint-disable no-console */
	console.log(`Listening: http://localhost:${port}`);
	openConnection().then(() => putExampleBooksInDb());
	/* eslint-enable no-console */
});

export default app;
