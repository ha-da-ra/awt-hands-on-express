import {NextFunction, Request, Response} from "express";
import { getAllBooks } from "../database/book-crud";

/* Continue Task 2 */
/* Start Task 1 */ 
export async function getBooks (req: Request, res : Response) {
    try {
        const allBooks = await getAllBooks();
        res.status(200).send(allBooks);
    } catch (e){
        res.status(500).send("Some server error");
    }
}
/* Continue Task 1 in BookRouter.ts*/
/* End Task 2*/
