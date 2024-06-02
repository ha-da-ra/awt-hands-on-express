import { Router } from "express";
import { getBooks, getBooks2 } from "../controllers/BookController";

/* Continue Task 1 */
export const bookRouter = Router();

bookRouter.get("/", getBooks2);
/* Continue Task 1 in app.ts */
