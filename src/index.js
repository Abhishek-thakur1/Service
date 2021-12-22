import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter  } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <HashRouter >
          <App/>
        </HashRouter>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

