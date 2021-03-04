import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'
import {AuthContext} from "./context/AuthContext";
import DashboardLayout from "./layouts/DashboardLayout";
import {Loader} from "rsuite";

function App() {
  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader/>
  }

  return (
      <AuthContext.Provider value={
        {login, logout, token, userId, isAuthenticated}
      }>
        <Router>
          {isAuthenticated && <DashboardLayout/>}
          {routes}
        </Router>
      </AuthContext.Provider>
  )
}

export default App;
