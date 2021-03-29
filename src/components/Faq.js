import React from "react";
class Faq extends React.Component{
    render(){
        return(
            <div className="relative m-10 pt-4 lg:m-18">
                <h1 className="text-center font-extrabold text-3xl p-4">FAQ page</h1>
                <nav className="invisible lg:visible fixed lg:top-0 lg:left-0 lg:h-full lg:w-3/5 m-10 pt-4 lg:m-18">
                    
                    <ul className="text-lg px-2">
                        <li className="py-4"><a href="#philosophy">CORPORATE PHILOSOPHY</a></li>
                        <li className="py-4"><a href="#Our_Mission">Our Mission</a></li>
                        <li className="py-4"><a href="#Our_Vision">Our Vision</a></li>
                        <li className="py-4"><a href="#Our_Philosophy">Our Philosophy</a></li>
                        <li className="py-4"><a href="#Our_Creed">Our Creed</a></li>
                        <li className="py-4"><a href="#OUR_PORTFOLIO">OUR PORTFOLIO </a></li>
                        <li className="py-4"><a href="#MANAGEMENT_TEAM">MANAGEMENT TEAM</a></li>    
                    </ul>
                </nav>
  
  
            <main className="ml-5 lg:ml-52 p-10">
                <section class="main-section" id="philosophy">
                    <header className="text-xl lg:text-3xl text-center">CORPORATE PHILOSOPHY</header>
                    <article className="text-xl pb-7">
                    <p>
                    We are an entity that combines experience, 
                    expertise and sound human relations backed by world class technology to achieve our goals with considerable ease.  
                    </p>
                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Mission">
                    <header className="text-xl lg:text-3xl text-center font-bold">Our Mission</header>
                    <article className="text-xl pb-7">
                    <p>
                    “To  provide  high  quality  information  technology  solutions  with pioneering ideas”  
                    </p>

                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Vision">
                    <header className="text-xl lg:text-3xl text-center font-bold">Our Vision</header>
                    <article className="text-xl pb-7">
                    <p>
                    To be the best in the information technology industry”
                    </p>
                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Philosophy">
                    <header className="text-xl lg:text-3xl text-center font-bold">Our Philosophy</header>
                    <article className="text-xl pb-7">
                    <p>“Cost Effective Solutions, Get it right at the first time”</p>
                    </article>
                </section>
                <section class="main-section w-auto" id="Our_Creed">
                    <header className="text-xl lg:text-3xl text-center font-bold">Our Creed</header>
                    <article className="text-xl pb-7">
                        <p>
                    “We actualize our philosophy in every work we handle by being different, not just in concepts and strategies we deploy,
                     but also in the solutions we provide as well as provide these services to cost, budget and quality”
                    </p>
                    </article>
                    
                </section>
                <section class="main-section w-auto" id="OUR_PORTFOLIO">
                    <header className="text-xl lg:text-3xl text-center font-bold">OUR PORTFOLIO </header>
                    <article className="text-xl pb-7">
                    Since incorporation in Nigeria, we have been opportune to provide our services to clients that are leaders in the various sectors of the economy. 
                    <p className="font-bold text-lg">Specific Tools and Techniques:</p>
                    <ul>
                        <li>Email services (Hosting & Management) </li>   
                        <li>Website design and development </li>
                         
                    </ul>
                    
                    <p>
                        Contact: Sheriff Daramola Executive Director – 07066699919
                    </p>
                    <p className="font-bold text-lg">Powerspec Solution Limited: </p>
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