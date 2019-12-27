import React from 'react';
import {
  BrowserRouter, HashRouter
} from 'react-router-dom'
import { 
  renderRoutes
} from 'react-router-config';
import {
  IconStyle
} from './assets/iconfont/iconfont'
import routes from './router/index'


function App() {
  return (
    <BrowserRouter>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
