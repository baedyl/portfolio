import React from 'react';
import AnimBackground from './AnimBackgroung';

import './style/Home.css';

const Home = () => {
    return(  
        <section>
            <div>
                <AnimBackground/>
            </div> 
             <h1 className="NameTitle">
                &#123; Emmanuel Dylan &#125;
            </h1>
            <div className="wrapper">     
                <div className="FirstWord">
                    <b>Hello!&nbsp;</b> 
                </div>
                <div className="CatchPhrase animate">
                    <span>
                        I love coding!
                    </span>
                </div>
            </div>

                   
        </section>          
    );
}

export default Home;