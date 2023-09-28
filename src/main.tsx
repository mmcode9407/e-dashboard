import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <AuthProvider
         authType="cookie"
         authName="_auth"
         cookieDomain={window.location.hostname}
         cookieSecure={true}
      >
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </AuthProvider>
   </React.StrictMode>,
);
