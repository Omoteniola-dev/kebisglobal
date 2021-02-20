import React from "react";
import Header from "../components/Header";
import ServiceList from "../components/ServiceList";
import web from "../images/web-programming.svg";
import app from "../images/app-design.svg";
import office from "../images/office.svg";

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
          Services: [
            {
            "id": 1,
            "svg": web, 
            "Service": "Web development",
            "text": "We build high performing and scalable web applications to meet your requirements."
          },
          {
            "id":2,
            "svg": app,
            "Service": "App development",
            "text": "Android and iOS applications for your users in modern fashion."
          },
          {
            "id": 3,
            "svg": office,
            "Service": "Microsoft 365 setup and automation",
            "text": "Specialised IT professionals with years of experience"
          }
          ]
        }
      }
      render() {
          const { Services } = this.state;
          return(
            <div>
                <div className="preview">
                <Header />
                </div>
                
                <div>
                <ServiceList data={Services}/>
                </div>
                
            </div>
    )
      }
    
}

export default Home;