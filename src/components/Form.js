import React from "react";


const Form = () => {
    return(
        <div className="my-10 lg:m-10 p-10 w-full lg:w-3/5 bg-gray-200">
            <form action="#" method="POST">
            <label>Name:
                <input className="border-gray-900 w-full" type="text" name="name" placeholder="Name"/><br/>
            </label><br/>

            <label>Email:
                <input className="border-gray-900 w-full" type="email" name="email" placeholder="Your Email"/><br/>
            </label><br/>
            
            <label>Message:</label><br/>
            <textarea className="w-full h-full" placeholder="Type your message here"></textarea><br/>

            <input className="px-4 mt-4 bg-gray-700" type="submit" value="SEND"/>
            
            </form>
        </div>
    )
}

export default Form;