import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Testimonialpage from "../components/Testimonialpage";
import Faq from "../components/Faq";
import About from "../components/About";
import Footer from "../components/Footer";
import Contactpage from "../components/Contactpage";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
  
  render() {
    
    return(
      <div className="">
      <Router>  
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Testimonialpage" component={Testimonialpage}/>
            <Route path="/Faq" component={Faq}/>
            <Route path="/Contactpage" component={Contactpage}/>
          </Switch>
          </div>
        </Router>
        <div className="footer">
         {
           //<Footer />
         }
         
         
        </div>
        
        </div>
        
      
      
    );
    
  } 
}

export default App;
