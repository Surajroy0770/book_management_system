import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ book }) => {
    const { BookName, Author, ImageUrl } = book;
    return (
        <div className='book-card'>
            <img src={ImageUrl} alt={BookName} className='book-img' />
            <div className="book-details">
                <h3>{BookName}</h3>
                <p>{Author}</p>
            </div>
            <div className="book-actions">
                <Link to={`/update/${book._id}`}>
                    <button>Edit</button>
                </Link>
                <Link to={`/delete/${book._id}`}>
                    <button>Delete</button>
                </Link>
            </div>
        </div>
    )
}
