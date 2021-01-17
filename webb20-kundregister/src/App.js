import React from "react";
import { Switch, Route } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import LoginPage from "./pages/LoginPage";
import CreateCustomer from "./pages/CreateCustomer";
import CustomerDetail from "./pages/CustomerDetail";
import CustomerUpdate from "./pages/CustomerUpdate";
import Nav from "./components/Nav";
import "./App.scss";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/home">
          <CustomerList />
        </Route>
        <Route path="/customers/create">
          <CreateCustomer />
        </Route>
        <Route path="/customers/:id/edit" component={CustomerUpdate} />
        <Route path="/customers/:id" component={CustomerDetail} />
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
