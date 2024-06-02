import { BookModel } from "./BookModel";
import { someBookExamples } from "./someBookExamples";

// All functions to access your books

export function getAllBooks() {
/* Start Task 6 */
    return BookModel.find({ rating: { $gt: '7' } })
                    .sort({ author: -1 })
                    .select({ _id: 0, title: 1, author: 1 });
/* End Task 6 */
}


export async function putExampleBooksInDb() {
/* Continue Task 5 */
    await BookModel.deleteMany({});
    await BookModel.create(someBookExamples);
/* End Task 5 */
}

