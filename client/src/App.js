import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchFormAndResults from './components/SearchFormAndResults'
import Episodes from './components/Episodes'
import Episode from './components/Episode'
import Loading from './components/Loading'

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={['/search', '/']}>
          <SearchFormAndResults />
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
    </div>
  );
}

export default App;
