import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinkPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {AuthPage} from "./pages/AuthPage";
import {DetailPage} from "./pages/DetailPage";
import Account from "./views/account/AccountView";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
        <Switch>
          <Route path="/links" exact>
            <LinkPage/>
          </Route>
          <Route path="/create" exact>
            <CreatePage/>
          </Route>
          <Route path="/detail/:id">
            <DetailPage/>
          </Route>
          <Route path="/profile">
            <Account/>
          </Route>
          <Redirect to="/create"/>
        </Switch>
    )
  }
  return (
      <Switch>
        <Route path="/" exact>
          <AuthPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
  )
}