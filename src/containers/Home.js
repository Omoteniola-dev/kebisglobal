import React, { Component } from "react";
import Header from "../components/Header";
import ServiceList from "../components/ServiceList";
import web from "../images/web-programming.svg";
import app from "../images/app-design.svg";
import office from "../images/office.svg";
import training from "../images/training.svg"

class Home extends Component {
    constructor(){
        super()
        this.state = {
          Services: [
            {
            "id": 1,
            "svg": web, 
            "Service": "Web design and development",
            "text": "We build high performing and scalable web applications to meet your requirements."
          },
          {
            "id":2,
            "svg": app,
            "Service": "Hardware",
            "text": "We provide sales of all kinds of computer hardware. From regular desktop computers of different configuration, notebooks and laptops,monitors, combo printers and servers for all levels of users."
          },
          {
            "id": 3,
            "svg": office,
            "Service": "Business Process Automation",
            "text": "We have specialised IT professionals that use low-code Microsoft based applications tools to automate processes that exists in a business setting."
          },
          {
            "id": 4,
            "svg": training,
            "Service": "ICT training",
            "text": "We offer ICT training in Microsoft 365 User and Administrator, SharePoint administrator, Power apps administrator, windows server administrator."
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
                {
                  //add partner bar component here.
                }
                <div>
                <ServiceList data={Services}/>
                </div>
                
            </div>
    )
      }
    
}

export default Home;