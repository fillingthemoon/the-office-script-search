import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Layout } from 'antd'
const { Header } = Layout

const NavBar = () => {

  const headerStyle = {
    background: '#ffffff',
    margin: '20px',
  }

  const navBarStyle = {
    border: 'none',
  }

  const logoStyle = {
    float: 'left',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginRight: '50px',
  }

  return (
    <Header style={headerStyle}>
      <span style={logoStyle}>The Office Script Search</span>
      <Menu mode='horizontal' style={navBarStyle}>
        <Menu.Item key='search'>
          <Link replace to='/search'>Search</Link>
        </Menu.Item>
        <Menu.Item key='episodes'>
          <Link replace to='/episodes'>All Episodes</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default NavBar