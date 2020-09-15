import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import EventDetailPage from "./pages/EventDetailPage";
import EventListPage from "./pages/EventListPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [token, setToken] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(true);

  return (
    <div className="App">
      <UserContext.Provider
        value={{ token, setToken, isDataFetched, setIsDataFetched }}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/event-list" exact component={EventListPage} />
          <Route path="/event:slug" exact component={EventDetailPage} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
