import { BookModel } from "./BookModel";

// All functions to access your books

export function getAllBooks() {
    return BookModel.find({});
}