import React from 'react';
import GlobalStyle from './Shared/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Error404 from './Components/Error404';
import Lettings from './Components/Lettings';
import DealSourcing from './Components/DealSourcing';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/HowardHavens"} component={Home} />
          <Route exact path={"/HowardHavens/Lettings"} component={Lettings} />
          <Route exact path={"/HowardHavens/DealSourcing"} component={DealSourcing} />
          <Route exact path={"/HowardHavens/Projects"} component={Projects} />
          <Route exact path={"/HowardHavens/Contact"} component={Contact} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
