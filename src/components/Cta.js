import {Component} from "react";

class Cta extends Component{
    constructor(){
        super()
        this.state = {
            searchfield:"",
        }
            
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})    
    }

    render(){
        return(
        <div className="relative text-center">
            <form method="POST" action="#">
                <label for="email" className="ml-4 mr-4 text-lg lg:text-xl text-black font-base lg:py-14  leading-snug">Subscribe to our newsletter to get insider tech tips.</label>
                <input className="p-3 m-3" type="email" value={this.state.searchfield} placeholder="Your email" onChange={this.onSearchChange}/>
                <button className="p-2 text-white bg-green-700 hover:bg-green-900 " type="submit">SIGN UP</button>
            </form>
        </div>
    )
    }
    
}

export default Cta;