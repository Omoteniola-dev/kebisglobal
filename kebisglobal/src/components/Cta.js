import React from "react";

const Cta = () => {
    return(
        <div className="text-center">
            <p className="py-12 text-black text-xl font-base lg:py-14 text-4xl leading-snug">Subscribe to our newsletter to get insider tech tips.</p>
            <form action="#" method="POST">
                <input type="email" placeholder="Email"/>
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    )
}

export default Cta;