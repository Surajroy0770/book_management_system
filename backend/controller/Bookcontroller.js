import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Book } from "../models/bookSchema.js";

export const GetBook = catchAsyncError(async (req, res) => {
    const book = await Book.find();
    res.status(200).json({ success: true, data: book })
})

export const AddBook = catchAsyncError(async (req, res) => {
    const { BookName, Author, Discription, ImageUrl } = req.body;

    if (!BookName || !Author || !Discription || !ImageUrl) {
        return res.status(400).json({
            message: "Please fill all provide data",
        })
    }
    const book = await Book.create({ BookName, Author, Discription, ImageUrl })
    res.status(200).json({ success: "Added Successfully ", data: book });
});

export const UpdateBook = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const book = await Book.findByIdAndUpdate(id, updateData, { new: true })
    if (!book) {
        return res.status(404).json({ message: "No such book found!" })
    }
    else {
        res.status(201).json({ message: "Updated Succesfully !", data: book })
    }
});

export const DeleteBook = catchAsyncError(async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete({ _id: id });
        return res.json({message:"Deleted  successfully"})
    } catch (error) {
        return res.json(error)
    }
});

export const GetOne = catchAsyncError(async (req, res) => {
    const id = req.params.id;
    const user = await Book.findById(id);
    if (!user)
        return res.status(404).json({ message: "No such book found!" })
    else
        res.status(200).json({ data: user })
})

