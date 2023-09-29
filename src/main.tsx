import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App';
import './main.css';
import { store } from 'store/configureStore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate persistor={persistStore(store)}>
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
         </PersistGate>
      </Provider>
   </React.StrictMode>,
);
