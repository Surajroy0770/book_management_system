import React, { useState } from 'react'
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AddBook = () => {
  const [BookName, setBookName] = useState('')
  const [Author, setAuthor] = useState('')
  const [ImageUrl, setImageUrl] = useState('')
  const [Discription, setDiscription] = useState('')
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("http://localhost:8000/api/add/book",
        { BookName, Author, ImageUrl, Discription },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      ).then((res) => {
        toast.success(res.data.success);
        setBookName("");
        setAuthor("");
        setImageUrl("");
        setDiscription("");
        navigate("/books")
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="addbook_conatiner">
      <h1 className='title'>Add Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="bookItims">
          <div className="books">
            <input type="text" placeholder="BookName" value={BookName} onChange={(e) => { setBookName(e.target.value) }} />
          </div>
          <div className="books">
            <input type="text" placeholder="Author" value={Author} onChange={(e) => { setAuthor(e.target.value) }} />
          </div>
          <div className="books">
            <input type="text" placeholder="ImageUrl" value={ImageUrl} onChange={(e) => { setImageUrl(e.target.value) }} />
          </div>
          <div className="books">
            <textarea cols={7} placeholder='Discription' value={Discription} onChange={(e) => { setDiscription(e.target.value) }} ></textarea>
          </div>
          <div className="books">
            <button type='submit' className='btn submit'>Add Book</button>
          </div>
        </div>
      </form>
    </div>
  )
}