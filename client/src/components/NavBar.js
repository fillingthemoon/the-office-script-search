import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <h1>The Office Script Search</h1>
      <Link replace to='/search'>Search</Link>
      <Link replace to='/episodes'>Episodes</Link>
    </div>
  )
}

export default NavBar