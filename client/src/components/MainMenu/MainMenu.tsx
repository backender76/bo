import React from 'react'
import {Menu} from 'antd'
import {UserOutlined, VideoCameraOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

const menuItems = [
  {url: '/', name: 'home', icon: <UserOutlined />},
  {url: '/login', name: 'login', icon: <VideoCameraOutlined />},
]

export const MainMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
      {menuItems.map(({url, name, icon}) => {
        return (
          <Menu.Item key={url} icon={icon}>
            <Link to={url}>{name}</Link>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
