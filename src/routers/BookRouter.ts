import { Router } from "express";
import { getBooks } from "../controllers/BookController";


export const BookRouter = Router();

BookRouter.get("/", getBooks);
