import React from 'react';
import {Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes';

import './styles.scss';

export const history = createBrowserHistory();

function App() {
  return (
    <div className='container-all'>
      <Router history={history}>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
