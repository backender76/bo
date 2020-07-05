import React from 'react'
import './App.css'
import {Layout} from 'antd'

const {Sider, Content, Footer} = Layout

function App() {
  return (
    <Layout className="App">
      <Sider>Sider</Sider>
      <Layout>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default App
