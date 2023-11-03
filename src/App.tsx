import React from 'react';
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './views/LoginPage/LoginPage';
import { DashboardPage } from 'views/DashboardPage/DashboardPage';
import { LeadsPage } from 'views/LeadsPage.tsx/LeadsPage';
import { Layout } from 'views/Layout/Layout';
import { Paths } from 'data/types/types';

function App() {
   const isAuthenticated = useIsAuthenticated();

   return (
      <Routes>
         <Route path={Paths.HOME} element={<Navigate to={Paths.LOGIN} />} />
         <Route
            path={Paths.LOGIN}
            element={!isAuthenticated() ? <LoginPage /> : <Navigate to={Paths.DASHBOARD} />}
         />
         <Route element={<Layout />}>
            <Route
               path={Paths.DASHBOARD}
               element={
                  <RequireAuth loginPath={Paths.LOGIN}>
                     <DashboardPage />
                  </RequireAuth>
               }
            />
            <Route
               path={Paths.LEADS}
               element={
                  <RequireAuth loginPath={Paths.LOGIN}>
                     <LeadsPage />
                  </RequireAuth>
               }
            />
         </Route>
      </Routes>
   );
}

export default App;
