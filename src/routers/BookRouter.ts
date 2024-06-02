import { Router } from "express";
import { getBooks} from "../controllers/BookController";

/* Continue Task 1 */
export const bookRouter = Router();

bookRouter.get("/", getBooks);
/* Continue Task 1 in app.ts */
