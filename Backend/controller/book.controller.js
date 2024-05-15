import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

// Controller function to handle book uploads

export const uploadBook = async (req, res) => {
    console.log(req.body);
    try {
        const { name, price, category, image, title, durl } = req.body;
        const newBook = new Book({ name, price, category, image, title, durl });
        await newBook.save();
        res.status(201).json({ message: 'Book uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


