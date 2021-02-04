import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App/App';
import { ContextProvider } from './Context/Context'
import { PostListProvider } from './Context/PostListContext'

ReactDOM.render(
  <BrowserRouter>
    <PostListProvider>
      <ContextProvider>
        <App />
      </ContextProvider>    
    </PostListProvider> 
  </BrowserRouter>,
  document.getElementById('root')
);
