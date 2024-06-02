import { BookModel } from "./BookModel";
import { someBookExamples } from "./someBookExamples";

// All functions to access your books

export function getAllBooks() {
/* Start Task 6 */
    return BookModel.find({});
/* End Task 6 */
}


export async function putExampleBooksInDb() {
/* Continue Task 5 */
    await BookModel.deleteMany({});
    await BookModel.create(someBookExamples);
/* End Task 5 */
}

