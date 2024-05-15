import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: { type: Number, default: 0 },
    category: String,
    image: String,
    title: String,
    durl: String
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
