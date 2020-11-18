import React from 'react';
import AnimBackground from './AnimBackgroung';

import './style/Home.css';

const Home = () => {
    return(  
        <section>
            <AnimBackground home="true"/> 
            <div className="wrapper">     
                <div className="FirstWord">
                    <span>Hello world!</span>
                </div>
                <div className="CatchPhrase animate">
                    <span>
                        Hope you are doing great!
                    </span>
                </div>
            </div>

                   
        </section>          
    );
}

export default Home;