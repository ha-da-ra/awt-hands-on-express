import {Request, Response} from "express";
import { getAllBooks } from "../database/book-crud";

export async function getBooks (req: Request, res : Response) {
    try {
        const allBooks = await getAllBooks();
        res.status(200).send(allBooks);
    } catch (e){
        res.status(500).send("Some server error");
    }
}