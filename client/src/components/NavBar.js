import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Layout } from 'antd'
const { Header } = Layout

const NavBar = () => {

  const logoStyle = {
    float: 'left',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginRight: '50px',
  }

  return (
    <Header>
      <span style={logoStyle}>The Office Script Search</span>
      <Menu mode='horizontal'>
        <Menu.Item key='search'>
          <Link replace to='/search'>Search</Link>
        </Menu.Item>
        <Menu.Item key='episodes'>
          <Link replace to='/episodes'>Episodes</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar