import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Testimonialpage from "../components/Testimonialpage";
import Faq from "../components/Faq";
import About from "../components/About";
import Footer from "../components/Footer";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
  
  render() {
    
    return(
      <Router>
        <div className="App">
          <div className="fixed inset-0">
            <Navbar />
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Testimonialpage" component={Testimonialpage}/>
            <Route path="/Faq" component={Faq}/>
          </Switch>
          <div className="footer">
            <Footer />
          </div>
          
        </div>
      </Router>
      
    );
    
  } 
}

export default App;
