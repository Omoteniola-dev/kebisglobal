import React from "react";


const Form = () => {
    return(
        <div className="my-10 lg:m-10 p-10 w-full lg:w-3/5 bg-blue-500 rounded-3xl">
            <form action="#" method="POST">
            <label>Name:
                <input className="border-gray-900 w-full rounded-sm" type="text" name="name" placeholder="Name"/><br/>
            </label><br/>

            <label>Email:
                <input className="border-gray-900 w-full rounded-sm focus:ring-2 ring-blue-600" type="email" name="email" placeholder="Your Email"/><br/>
            </label><br/>
            
            <label>Message:</label><br/>
            <textarea className="w-full h-full rounded-sm" placeholder="Type your message here"></textarea><br/>

            <input className="px-4 py-3 mt-4 bg-blue-700 lg:hover:bg-blue-500" type="submit" value="SEND"/>
            
            </form>
        </div>
    )
}

export default Form;