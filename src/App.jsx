import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <div className="container">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path={["/chat/:contactID", "/"]}>
              <Layout />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </Provider>
  );
}
