import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'

const pageComponent = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  pageComponent,
  document.getElementById('root')
);

