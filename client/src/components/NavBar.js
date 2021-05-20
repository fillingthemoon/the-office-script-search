import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Layout, Dropdown, Button } from 'antd'
const { Header } = Layout

import { MenuOutlined } from '@ant-design/icons'

import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 830px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const headerStyle = {
    background: '#ffffff',
    margin: isBigScreen ? '40px 0 20px 0' : '20px 0 0 0',
    padding: isBigScreen ? '0 100px' : '0 30px',
  }

  const navBarStyle = {
    border: 'none',
  }

  const navBarLinkStyle = {
    fontSize: isBigScreen ? '1.2rem' : '1rem',
  }

  const logoStyle = {
    float: 'left',
    fontSize: isBigScreen ? '1.5rem' : '1.2rem',
    fontWeight: 'bold',
    marginRight: isBigScreen ? '70px' : 0,
  }

  const menu = (orientation) => (
    <Menu
      onClick={() => { console.log('hi') }}
      mode={orientation}
      style={navBarStyle}>
      <Menu.Item key='search'>
        <Link replace to='/search' style={navBarLinkStyle}>Search</Link>
      </Menu.Item>
      <Menu.Item key='episodes'>
        <Link replace to='/episodes' style={navBarLinkStyle}>All Episodes</Link>
      </Menu.Item>
    </Menu >
  )

  const dropdownMenu = () => (
    <div style={{ float: 'right' }}>
      <Dropdown
        overlay={() => menu('vertical')}
        trigger={['click']}
        placement='topRight'
      >
        <Button
          icon={
            <MenuOutlined
              style={{
                fontSize: '1.3rem',
              }}
            />}
          style={{ border: 'none', }}
        />
      </Dropdown>
    </div>
  )

  return (
    <Header style={headerStyle}>
      <span style={logoStyle}>
        <span style={{ fontFamily: 'Roboto Mono' }}>The Office</span>
        <span style={{ marginLeft: '0.8rem' }}>Script Search</span>
      </span>
      {isBigScreen ? menu('horizontal') : dropdownMenu()}
    </Header >
  )
}

export default NavBar