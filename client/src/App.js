import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchFormAndResults from './components/SearchFormAndResults'
import Episodes from './components/Episodes'
import Episode from './components/Episode'
import Loading from './components/Loading'

import './style.css'

import { Layout } from 'antd'
const { Content } = Layout

const layoutStyle = {
  background: '#ffffff',
}

const layoutContentStyle = {
  background: '#ffffff',
  padding: '40px 3% 40px 3%',
}

function App() {

  return (
    <Layout style={layoutStyle}>
      <NavBar />
      <Content style={layoutContentStyle}>
        <Switch>
          <Route exact path='/search'>
            <SearchFormAndResults />
          </Route>
          <Route exact path='/'>
            <Redirect to='/search' />
          </Route>
          <Route exact path='/episodes'>
            <Episodes />
          </Route>
          <Route exact
            path={[
              '/seasons/:seasonId/episodes/:episodeId/lines'
              , '/seasons/:seasonId/episodes/:episodeId/scenes/:sceneId/lines'
            ]}
          >
            <Episode />
          </Route>
        </Switch>
        <Loading />
      </Content>
    </Layout>
  )
}

export default App