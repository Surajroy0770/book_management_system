import express from 'express'
import { AddBook, DeleteBook, GetBook, GetOne, UpdateBook } from '../controller/Bookcontroller.js';

const router=express.Router();

router.get("/getbook",GetBook);
router.post("/add/book",AddBook);
router.put("/update/book/:id",UpdateBook)
router.delete("/delete/book/:id",DeleteBook)
router.get("/getone/book/:id",GetOne)


export default router;