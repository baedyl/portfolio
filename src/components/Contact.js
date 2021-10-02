import React from 'react';
import AnimBackground from './AnimBackgroung';
import Footer from './Footer';

const Contact = () => {
    return(
        <div>
            <AnimBackground /> 
            <h3 className="contact-msg">Feel free to interact with me on any of these platforms!</h3>
            <Footer></Footer>
        </div>
        
    );
}

export default Contact;