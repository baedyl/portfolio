import React from 'react';

import './style/Home.css';

const Home = () => {
    return(  
        <section>
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
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>    
        
    );
}

export default Home;