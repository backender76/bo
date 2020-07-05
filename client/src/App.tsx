import React, {useState} from 'react'
import './App.css'
import {Layout} from 'antd'
import {Header} from './components/Header/Header'
import {MainMenu} from './components/MainMenu/MainMenu'
import {Route, Switch /*, Redirect*/} from 'react-router-dom'
import {Logotype} from './components/Logotype/Logotype'

const {Sider, Content, Footer} = Layout

function App() {
  const [collapsed, setCollapse] = useState(false)

  return (
    <Layout className="App">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logotype collapsed={collapsed} />
        <MainMenu />
      </Sider>
      <Layout className="App-content-layout">
        <Header collapse={collapsed} onClick={() => setCollapse(!collapsed)} />
        <Content className="App-content">
          <Switch>
            <Route path="/login" render={() => <h1>Page login</h1>} />
            <Route path="/" render={() => <h1>Home page</h1>} />
            <Route path="/" render={() => <h1>Page not found</h1>} />
          </Switch>
        </Content>
        <Footer style={{textAlign: 'center'}}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default App
