import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './main.css';
import { store } from 'store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
   </React.StrictMode>,
);
