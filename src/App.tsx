import React from 'react';
import GlobalStyle from './Shared/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Error404 from './Components/Error404';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
