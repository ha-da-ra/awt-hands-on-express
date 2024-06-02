import mongoose, { Schema, model, connect } from 'mongoose';
const dbPath = process.env.MONGODB ||"mongodb://127.0.0.1:27017/test";

export async function openConnection() {
    /* Start Task 5 */ 
    try {
        await connect(dbPath);
        console.log('connected');
    } catch (error) {
        handleError(error);
    }
    /* Continue Task 5 in BookModel.ts*/

}


function handleError(error: unknown) {
    console.log('error during connect');
}
