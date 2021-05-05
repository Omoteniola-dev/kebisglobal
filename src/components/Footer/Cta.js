import {Component} from "react";

class Cta extends Component{
    constructor(){
        super()
        this.state = {
            inputfield:"",
        }
            
    }

    onSearchChange = (event) => {
        this.setState({inputfield: event.target.value})    
    }

    render(){
        return(
        <div className="text-center">
            <form method="POST" action="#">
                <label for="email" className="ml-4 mr-4 text-lg lg:text-xl text-black font-base lg:py-14 leading-snug">Subscribe to our newsletter to get insider tech tips.</label><br/>
                <input className="p-2 m-3" type="email" value={this.state.inputfield} placeholder="Your email" onChange={this.onSearchChange}/>
                <button className="p-2 text-white bg-blue-800 hover:bg-blue-700 " type="submit">SIGN UP</button>
            </form>
        </div>
    )
    }
    
}

export default Cta;