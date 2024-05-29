import { Model, Schema } from "mongoose";
import { IBook } from "./IBook";

const bookSchema = new Schema ({
    
});

export const BookModel = new Model(bookSchema);