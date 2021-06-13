import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Layout from '../Layout/Layout';

//Pages
import Home from '../../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;