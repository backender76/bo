import React from 'react'
import {Breadcrumb, Layout} from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import './Header.css'

interface HeaderProps {
  collapse: boolean
  onClick: Function
}

export const Header = (props: HeaderProps) => {
  const {collapse, onClick} = props

  return (
    <Layout.Header className="App-Header site-layout-background" style={{padding: 0}}>
      {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => onClick(),
      })}
      <Breadcrumb style={{margin: '0'}}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    </Layout.Header>
  )
}
