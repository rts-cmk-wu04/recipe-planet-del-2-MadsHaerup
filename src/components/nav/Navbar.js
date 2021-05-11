import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "@reach/router";
import './Navbar.scss';

export default function Navbar() {
  const [navlink, setNavlink] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:1337/recipes')
    .then((response)=>{ 
      console.log(response.data)
      setNavlink(response.data)
    })
  }, [setNavlink])

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link to="/">All</Link>
        </li>
       {navlink.map((link) => (
       <li className="navbar__list__item" key={link.id}>
         <Link to={`/${link.categories[0].name}`}>{link.categories[0].name}</Link>
        </li>
       ))}
      </ul>
    </nav>
  )
}
