import { Component } from "react";

class About extends Component {
    //constructor(){}

    render(){
        return(
            <div className="relative mt-10 pt-4 lg:mt-18">
                <h1 className="text-center font-extrabold text-3xl ml-12 p-4"> WHO ARE WE?</h1>
             
            <main className="p-6 scroll-none lg:ml-5 lg:ml-60 lg:p-10">
            <div className="bg-gray-100 px-10 py-4">
                <section class="main-section" id="philosophy">
                    <header className="text-xl font-bold lg:text-3xl text-center">CORPORATE PHILOSOPHY</header>
                    <article className="text-xl pb-7">
                    <p>
                    We are an entity that combines experience, 
                    expertise and sound human relations backed by world class technology to achieve our goals with considerable ease.  
                    </p>
                    </article>
                </section>
                <section class="main-section" id="Our_Mission">
                    <header className="text-2xl font-bold lg:text-3xl text-center">Our Mission</header>
                    <article className="text-xl pb-7">
                    <p>
                    “To  provide  high  quality  information  technology  solutions  with pioneering ideas”  
                    </p>

                    </article>
                </section>
                <section class="main-section" id="Our_Vision">
                    <header className="text-2xl font-bold lg:text-3xl text-center">Our Vision</header>
                    <article className="text-xl pb-7">
                    <p>
                    To be the best in the information technology industry”
                    </p>
                    </article>
                </section>
                <section class="main-section" id="Our_Philosophy">
                    <header className="text-2xl font-bold lg:text-3xl text-center">Our Philosophy</header>
                    <article className="text-xl pb-7">
                    <p>“Cost Effective Solutions, Get it right at the first time”</p>
                    </article>
                </section>
                <section class="main-section" id="Our_Creed">
                    <header className="text-xl font-bold lg:text-3xl text-center">Our Creed</header>
                    <article className="text-xl pb-7">
                        <p>
                    “We actualize our philosophy in every work we handle by being different, not just in concepts and strategies we deploy,
                     but also in the solutions we provide as well as provide these services to cost, budget and quality”
                    </p>
                    </article>
                    
                </section>
                <section class="main-section" id="OUR_PORTFOLIO">
                    <header className="text-2xl font-bold lg:text-3xl text-center">OUR PORTFOLIO </header>
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
                </div>
                <section className="mt-8" id="MANAGEMENT_TEAM">
                    <header className="text-3xl font-extrabold lg:text-4xl lg:font-extrabold text-center">MANAGEMENT TEAM</header>
                    <div className="text-xl pb-7">
                    
                    <div className="w-full p-8 bg-gray-100 rounded-xl mt-4 shadow-xl lg:shadow-2xl">
                        <h2 className="text-xl font-bold lg:text-3xl text-left">Oyebanjo, Kehinde</h2>
                        
                        <p className="text-base">Solution Consultant</p>
                       <p className="text-lg mt-3"> A  graduate  of  Electronics  &  Electrical  Engineering  from  the  Obafemi Awolowo  University  Ile-Ife,  Osun  State,
                        with  a  master’s  degree  in information technology from the University of Lagos.
                        Kehinde started his IT Professional Career as a network administrator. 
                        He later got experience with systems administration, and over the last 13 years have been involved with 
                        Network/System  Administration,  Business  Automation,  IT  Security, Infrastructure  and 
                            Cloud  services  in  different  sectors  like  microfinance banks, construction, consulting, and outsourcing. 
                            He later moved on to start Kebis Global Consultancy Services in 2018 to explore the growing ICT sector of the local economy
                        and carve a niche in the virgin and emerging trends in the Information and Communications Technology industry. He is happily married. 
                        </p>
                    </div>
                    
                    <div className="w-full p-8 bg-gray-100 rounded-xl mt-4 shadow-xl lg:shadow-2xl">
                        <h2 className="text-xl font-bold lg:text-3xl text-left pt-4">Adeoye, Kunle</h2>
                       
                        <p className="text-base">IT Security Consultant</p> A Highly resourceful and motivated team player, Kunle is a graduate ofComputer Engineering,
                         <p className="text-lg mt-3">Ladoke Akintola University of Technology. He is an experienced Azure Cloud and Systems Engineer with over
                        7 years in the IT industry with major focus in Cyber Security, Cloud Computing, Project Management,  IT  Administration  and  Control.
                        He’s  Passionate  about eliminating barriers, improving processes, reducing costs and empowering engineering in all stages of  the Software
                        Development Life Cycle (SDLC), Agile environment, Computer Networks and Security
                        
                        </p>
                    </div>
                    

                    <div className="w-full p-8 bg-gray-100 rounded-xl mt-4 shadow-xl lg:shadow-2xl">
                        <h2 className="text-xl font-bold lg:text-3xl text-left pt-4">Damilare Tinubu</h2>
                        
                        <p className='text-base'>Infrastructure Consultant</p>A graduate of Computer Engineering from Olabisi Onabanjo University.
                        <p className="text-lg mt-3">He is a resourceful and   motivated team player with over 2 years of experience in Systems Administration,
                        Infrastructure & Cloud services. He is involved in the deployment of Infrastructure solutions,
                        helps clients achieve more with less and provide direction in achieving a modern workplace.
                        </p>
                    </div>

                    </div>
                </section>
            </main>
            </div>
        )
    }
    

}
    


export default About;