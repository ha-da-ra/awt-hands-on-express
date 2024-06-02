import { Model, Schema, model } from "mongoose";
import { IBook } from "./IBook";

const bookSchema = new Schema<IBook>({
    /* Continue Task 5 */

    /* Continue Task 5 in book-crud.ts */
});

export const BookModel = model<IBook>("Book", bookSchema);
