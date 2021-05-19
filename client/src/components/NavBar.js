import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <h1>The Office Script Search</h1>
      <Link to='/search'>Search</Link>
      <Link to='/episodes'>Episodes</Link>
    </div>
  )
}

export default NavBar