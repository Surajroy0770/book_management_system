import React, { useState } from 'react'
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Update = () => {
  const [BookName, setBookName] = useState('')
  const [Author, setAuthor] = useState('')
  const [ImageUrl, setImageUrl] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getData = (async () => {
      await axios.get(`http://localhost:8000/api/getone/book/${id}`)
        .then(res => {
          setBookName(res.data.data.BookName)
          setAuthor(res.data.data.Author)
          setImageUrl(res.data.data.ImageUrl)
        })
        .catch(err => console.log(err))
    })
    getData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.put(`http://localhost:8000/api/update/book/${id}`,
        { BookName, Author, ImageUrl },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      ).then((res) => {
        toast.success(res.data.message);
        navigate("/books")

      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="addbook_conatiner">
      <h1 className='title'>Update Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="bookItims">
          <div className="books">
            <input type="text" placeholder="BookName" name='BookName' value={BookName} onChange={(e) => { setBookName(e.target.value) }} />
          </div>
          <div className="books">
            <input type="text" placeholder="Author" name='Author' value={Author} onChange={(e) => { setAuthor(e.target.value) }} />
          </div>
          <div className="books">
            <input type="text" placeholder="ImageUrl" name='ImageUrl' value={ImageUrl} onChange={(e) => { setImageUrl(e.target.value) }} />
          </div>
          <div className="books">
            <button type='submit' className='btn submit'>Update Book</button>
          </div>
        </div>
      </form>
    </div>
  )
}