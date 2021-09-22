import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/navigation/Footer";
import Navbar from "./components/navigation/Navbar";
import DirectoryPage from "./pages/DirectoryPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/directory" component={ DirectoryPage } />
        <Route exact path="/" component={ HomePage } />
      </Switch>
      <Footer />
    </div>
  );            
}

export default App;
