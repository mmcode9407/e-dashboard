import React from 'react';
import { Login } from './views/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';
import { Leads } from 'views/Leads';
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';

function App() {
   const isAuthenticated = useIsAuthenticated();

   return (
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
         <Route
            path="/login"
            element={!isAuthenticated() ? <Login /> : <Navigate to="/dashboard" />}
         />
         <Route
            path="/dashboard"
            element={
               <RequireAuth loginPath="/login">
                  <Dashboard />
               </RequireAuth>
            }
         />
         <Route
            path="/leads"
            element={
               <RequireAuth loginPath="/login">
                  <Leads />
               </RequireAuth>
            }
         />
      </Routes>
   );
}

export default App;
