import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home"
import './App.css';
import Projects from './Pages/Projects';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import NavBar from "./Components/NavBar"
import Footer from './Components/footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/Projects" >
          <Projects />
        </Route>
        <Route exact path="/AboutUs" >
          <AboutUs />
        </Route>
        <Route exact path="/ContactUs" >
          <ContactUs />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
