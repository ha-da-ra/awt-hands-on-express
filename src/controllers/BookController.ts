import {NextFunction, Request, Response} from "express";
import { getAllBooks } from "../database/book-crud";

/* Start Task 1 */ 
/* Continue Task 2 */
export async function getBooks (req: Request, res : Response) {
    try {
        const allBooks = await getAllBooks();
        res.status(200).send(allBooks);
    } catch (e){
        res.status(500).send("Some server error");
    }
}
/* End Task 2*/
/* Continue Task 1 in BookRouter.ts*/

/* Continue Task 2 */
export async function getBooks2 (req: Request, res : Response, next: NextFunction) {
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
/* End Task 2 */


/* Start Task 1 */ 
export async function getBooks3 (req: Request, res : Response) {
    try {
        /* Continue Task 2 */
        const allBooks = await getAllBooks();
        res.status(200).send(allBooks);
    } catch (e){
        res.status(500).send("Some server error");
    }
    /* End Task 2*/
}
/* Continue Task 1 in BookRouter.ts*/