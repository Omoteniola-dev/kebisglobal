import React from "react";

const links = [
    {"text": "Corporate philosopy", "link": "#philosophy"},
    {"text": "Our mission", "link": "#Our_Mission"},
    {"text": "Our Vision", "link": "#Our_Vision"},
    {"text": "Our Creed", "link": "Our Creed"},
    {"text": "Portfolio", "link": "#OUR_PORTFOLIO"},
    {"text": "Management team", "link": "#MANAGEMENT_TEAM"}, 
];

class Faq extends React.Component{
    render(){
        return(
            <div className="relative m-10 pt-4 lg:m-18">
                <h1 className="text-center font-extrabold text-3xl p-4">FAQ page</h1>
                <nav className="invisible lg:visible absolute lg:top-5 lg:left-0 lg:h-full lg:w-1/5 mt-10 pt-4 bg-gray-100">
                    
                    <ul className="text-base m-5 px-2">
                        {
                            links.map((link, i) => {
                                return <li className="py-4"><a href={link.link}>{link.text}</a></li>
                            })
                        }
                    </ul>
                </nav>
  
  
            <main className="lg:text-xl lg:p-16 w-full">
                <section class="main-section" id="philosophy">
                    <header className="text-xl lg:text-3xl text-center font-bold">CORPORATE PHILOSOPHY</header>
                    <article className="text-lg pb-7 m-5">
                    <p>
                    We are an entity that combines experience, 
                    expertise and sound human relations backed by world class technology to achieve our goals with considerable ease.  
                    </p>
                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Mission">
                    <header className="text-xl text-center font-bold">Our Mission</header>
                    <article className="text-lg pb-7 m-5">
                    <p>
                    “To  provide  high  quality  information  technology  solutions  with pioneering ideas”  
                    </p>

                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Vision">
                    <header className="text-xl text-center font-bold">Our Vision</header>
                    <article className="text-lg pb-7 m-5">
                    <p>
                    To be the best in the information technology industry”
                    </p>
                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Philosophy">
                    <header className="text-xl text-center font-bold">Our Philosophy</header>
                    <article className="text-xl pb-7 m-5">
                    <p>“Cost Effective Solutions, Get it right at the first time”</p>
                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Creed">
                    <header className="text-xl text-center font-bold">Our Creed</header>
                    <article className="text-xl pb-7 m-5">
                        <p>
                    “We actualize our philosophy in every work we handle by being different, not just in concepts and strategies we deploy,
                     but also in the solutions we provide as well as provide these services to cost, budget and quality”
                    </p>
                    </article>
                    
                </section>
                <section class="main-section w-auto" id="OUR_PORTFOLIO">
                    <header className="text-xl text-center font-bold">OUR PORTFOLIO </header>
                    <article className="text-xl pb-7 m-5">
                    Since incorporation in Nigeria, we have been opportune to provide our services to clients that are leaders in the various sectors of the economy. 
                    <p className="font-bold text-lg">Specific Tools and Techniques:</p>
                    <ul>
                        <li>Email services (Hosting & Management) </li>   
                        <li>Website design and development </li>
                         
                    </ul>
                    
                    <p>
                        Contact: Sheriff Daramola Executive Director – 07066699919
                    </p>
                    <p className="font-bold text-lg p-5">Powerspec Solution Limited: </p>
                    <ul>
                        <li>Email services (Hosting & Management)</li>   
                        <li>Website Design</li>
                    </ul>
                    <p>
                        Contact: Sheriff Daramola Executive Director – 07066699919
                    </p>
                    </article>
                </section>
                
            </main>

            </div>
        )
    }
}
    
export default Faq;