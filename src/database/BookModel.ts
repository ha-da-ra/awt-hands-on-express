import { Model, Schema, model } from "mongoose";
import { IBook } from "./IBook";

const bookSchema = new Schema<IBook>({
    /* Continue Task 5 */
    title: String,
    author: String,
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    alreadyRead: Boolean,
    /* Continue Task 5 in book-crud.ts */
});

export const BookModel = model<IBook>("Book", bookSchema);
