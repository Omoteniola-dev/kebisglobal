import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Testimonialpage from "../components/Testimonialpage";
import Faq from "../components/Faq";
import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";
import Contactpage from "../components/Contactpage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

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
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/Testimonialpage" component={Testimonialpage}/>
            <Route path="/Faq" component={Faq}/>
            <Route path="/Contactpage" component={Contactpage}/>
          </Switch>
          <Footer />
          </div>
          
        </Router>
       </div>
      
      
    );
    
  } 
}

export default App;
