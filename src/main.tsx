import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './main.css';
import { persistor, store } from 'store/configureStore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <AuthProvider
               authType="cookie"
               authName="_auth"
               cookieDomain={window.location.hostname}
               cookieSecure={true}
            >
               <Router>
                  <App />
               </Router>
            </AuthProvider>
         </PersistGate>
      </Provider>
   </React.StrictMode>,
);
