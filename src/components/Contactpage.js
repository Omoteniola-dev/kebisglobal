import React from "react";
import Form from "./Form";
class Contactpage extends React.Component{
    constructor(){
        super()
        this.state={
            options:[{
                id: 1,
                option: "Talk to Tech support",
                tag: "Chat with our technical support for tech related issues and advice.",
                action: "+234 000 3323 565" 
            },
            {
                id: 2,
                option: "Contact customer support",
                tag: "We are willing to help you. Don't hesitate to reach out.",
                action: "CONTACT SUPPORT"
            }
            ]
                
    }
}

    
    render(){
        const { options } = this.state;
        return (
            <div className="h-screen m-10 pt-4 lg:pt-8 lg:m-18 ">
                <h1 className="text-2xl text-center lg:text-4xl font-xl">Reach Out!</h1>
                <p className="text-sm text-gray-500 text-center">We love questions and feedbacks - We are always happy to help!
                    Here are some ways to contact us.</p>
                    <div className="flex flex-wrap flex-row lg:flex-wrap lg:space-x-4 justify-center">
                    {
                            options.map((option, i)=>{
                                return(
                                    <div className="w-auto lg:w-2/5 bg-gray-200 rounded-xl mt-8 px-4 py-8" key={i}>
                                        <p className="text-xl font-bold lg:text-3xl py-8">{options[i].option}</p>
                                        <p className="py-6">{options[i].tag}</p>
                                        <p className="w-3/4 mx-8 text-center py-2 bg-gray-500 rounded-2xl hover:bg-gray-300">{options[i].action}</p>
                                    </div>
                                )
                            }
                            
                            )
                    }

                    <Form />
                    </div>
            </div>
        )
    }
}

export default Contactpage;