import {NextFunction, Request, Response} from "express";
import { getAllBooks } from "../database/book-crud";

/* Start Task 1 */ 
/* Continue Task 2 */
export async function getBooks (req: Request, res : Response, next: NextFunction) {
    try {     
        const allBooks = await getAllBooks();
        if(allBooks != null){
            res.status(200).send(allBooks);
        } else{
            throw new Error("Failed");
        }
    } catch (error){
        next(error);
    }
}
/* End Task 2*/
/* Continue Task 1 in BookRouter.ts*/
