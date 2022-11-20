import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Data from "./pages/Data/Data";

const App = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/data" component={Data} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
