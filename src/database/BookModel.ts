import { Model, Schema } from "mongoose";
import { IBook } from "./IBook";

const bookSchema = new Schema ({
    title: String,
    author: String,
    rating: Int8Array,
    alreadyRead: Boolean,
});

export const BookModel = new Model(bookSchema);