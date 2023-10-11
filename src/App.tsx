import React from 'react';
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './views/Login';
import { Dashboard } from 'views/Dashboard';
import { Leads } from 'views/Leads';
import { Layout } from 'views/Layout';
import { Paths } from 'data/types/types';

function App() {
   const isAuthenticated = useIsAuthenticated();

   return (
      <Routes>
         <Route path={Paths.HOME} element={<Navigate to={Paths.LOGIN} />} />
         <Route
            path={Paths.LOGIN}
            element={!isAuthenticated() ? <Login /> : <Navigate to={Paths.DASHBOARD} />}
         />
         <Route element={<Layout />}>
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
         </Route>
      </Routes>
   );
}

export default App;
