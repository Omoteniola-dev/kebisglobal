import React from "react";
import Cta from "./Cta";

const Footer = () => {
    return(
        <footer className="footer">
            <Cta />
            <p className="text-center text-sm lg:text-base">2021 Copyright &copy; Kebisglobal. Built by <a className="text-purple-600" target="_blank"
             rel="noreferrer" href="https://twitter.com/Omoteniola_dev">Omoteniola-dev</a></p>
        </footer>
    )
}

export default Footer;