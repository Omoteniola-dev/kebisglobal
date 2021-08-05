import React from "react";
import Form from "./Form";




class Contactpage extends React.Component{
    render(){
            return (
            <div className="m-10 pt-4 lg:pt-4 lg:m-10 ">
                <h1 className="text-2xl text-center lg:text-4xl font-xl">Reach Out!</h1>
                <p className="text-sm text-gray-500 text-center">We love questions and feedbacks - We are always happy to help!
                    Here are some ways to contact us.</p>
                    <div className="lg:ml-96">
                        <Form />
                    </div>
            </div>
        )
    }
}

export default Contactpage;