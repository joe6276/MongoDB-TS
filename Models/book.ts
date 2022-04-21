import IBooks  from "../Interfaces/Book";
import mongoose from "mongoose";


const bookSchema =  new mongoose.Schema({
    name:{type:String, required:[true, 'Please enter a book name']},
    title:{type:String, required:[true, 'Please Enter Title']},
    author:{type:String, required:[true, 'Please enter author name']}
},

{
    timestamps:true
}
)


export default  mongoose.model<IBooks>('books', bookSchema)