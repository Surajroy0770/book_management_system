import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="Home_container">
      <div className="lift_side">
        <h1>BOOK STORE</h1>
         <h1> FOR YOU</h1>
         <Link  to="/books" >
        <button className='btn'>View Books</button>
        </Link>
      </div>
      <div className="right_side">
            <img src="bookimg.png" lt="book" className='BookImg' />
      </div>
    </div>
  )
}