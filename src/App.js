import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import HomePage from "./generalPages/homepage/Homepage";
import Curriculum from "./curriculum/pages/Curriculum";
import Concepts from "./concepts/pages/Concepts";
import Games from "./games/pages/Games";
import Contact from "./generalPages/contact/Contact";
import Creators from "./creators/pages/Creators"
import UserConcepts from "./concepts/pages/UserConcepts";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/curriculum" exact>
          <Curriculum />
        </Route>
        <Route path="/concepts" exact>
          <Concepts />
        </Route>
        <Route path="/games" exact>
          <Games />
        </Route>
        <Route path="/creators" exact>
          <Creators />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/:creatorId/concepts">
          <UserConcepts />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
