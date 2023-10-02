import React from 'react';
import { Login } from './views/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';
import { Leads } from 'views/Leads';
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';

enum Paths {
   HOME = '/',
   LOGIN = '/login',
   DASHBOARD = '/dashboard',
   LEADS = '/leads',
}

function App() {
   const isAuthenticated = useIsAuthenticated();

   return (
      <Routes>
         <Route path={Paths.HOME} element={<Navigate to={Paths.LOGIN} />} />
         <Route
            path={Paths.LOGIN}
            element={!isAuthenticated() ? <Login /> : <Navigate to={Paths.DASHBOARD} />}
         />
         <Route
            path={Paths.DASHBOARD}
            element={
               <RequireAuth loginPath={Paths.LOGIN}>
                  <Dashboard />
               </RequireAuth>
            }
         />
         <Route
            path={Paths.LEADS}
            element={
               <RequireAuth loginPath={Paths.LOGIN}>
                  <Leads />
               </RequireAuth>
            }
         />
      </Routes>
   );
}

export default App;
