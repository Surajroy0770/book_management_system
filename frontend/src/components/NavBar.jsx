import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className='navbar'>
            <div className="conatainer">
                <div className="left_side">
                    <h2>Book Management System</h2>
                    <div className='menu-icon'>
                        <GiHamburgerMenu onClick={() => setShow(!show)} />
                    </div>
                </div>
                <div className={show ? "mobile-menu-link" : "rigth_side"}>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/books"}>View Books</Link>
                        </li>
                        <li>
                            <Link to={"/add-book"} >Add Books</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
