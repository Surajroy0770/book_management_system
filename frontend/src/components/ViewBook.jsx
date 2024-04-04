import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from './Card';

export const ViewBook = () => {
  const [book, setbook ] = useState([])
  useEffect(() => {
    const Fetch = async () => {
      await axios.get('http://localhost:8000/api/getbook',{withCredentials:true})
      .then(res => {setbook(res.data.data)})
      .catch(err => console.log(err))
    };
    Fetch();
  },[]);

  return (
    <>
      <div className="card_container">
        <h1 className='title'>ALL  BOOKS</h1>
        <div className="book-list">
          {book && book.map((books)=>{
             return <Card key={books._id} book={books} />
          })}
        </div>
      </div>
    </>
  )
}
