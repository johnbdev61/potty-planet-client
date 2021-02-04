import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App/App';
import { ContextProvider } from './Context/Context'
import { PostListProvider } from './Context/PostListContext'
import { PostProvider } from './Context/PostContext'

ReactDOM.render(
  <BrowserRouter>
    <PostProvider>      
      <PostListProvider>
        <ContextProvider>
          <App />
        </ContextProvider>    
      </PostListProvider> 
    </PostProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
