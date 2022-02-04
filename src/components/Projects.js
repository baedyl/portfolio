import React, { Component } from 'react';
import AnimBackground from './AnimBackgroung';
import Card from './Card';
import ModalView from './ModalView';

import './style/Projects.css';
class Projects extends Component {

    state = { show: false };

    showModal = (link) => {
        console.log(link);
        if (link) {
            window.open(`${link}`, '_newtab')
        }
    }

    hideModal = () => {
        this.setState(
            {
                show: false
            }
        );
    }

    render () {
        const projects = [
            {
                id: 1,
                title: 'Scalinflow',
                description: 'Sales outreach SaaS',
                link: 'https://app.scalinflow.com/',
                appScreen: 'scalinflow'
            },
            {
                id: 2,
                title: 'MyGoodBoss',
                description: "A manager's virtual assistant",
                link: 'https://mygoodboss.com/#/',
                appScreen: 'mgb'
            },
            {
                id: 3,
                title: 'Coach Celo',
                description: 'Beauty services landing page',
                link: 'https://baedyl.github.io/celobeauty/',
                appScreen: 'celo'
            },
            {
                id: 4,
                title: 'E-Commerce Website Theme',
                description: 'Creation of a complete theme for an online boutique',
                link: 'https://creasouk.com/',
                appScreen: 'creasouk'
            },
            {
                id: 5,
                title: 'Essential oils',
                description: 'Static Website to showcase essential oils',
                link: 'https://peaceful-hawking-c98816.netlify.app/',
                appScreen: 'mhabil'
                
            },
            {
                id: 6,
                title: 'News App',
                description: 'Display and filter recent headlines from newsapi.org',
                link: 'https://github.com/baedyl/vue3-news-app',
                appScreen: 'newsapp'
            },
            {
                id: 7,
                title: 'Pharmaflix',
                description: 'A web app to manage advertising in french pharmacies',
                link: 'https://app.pharmaflix.live/login',
                appScreen: 'pharmaflix'
            },
            {
                id: 8,
                title: 'My portfolio',
                description: 'A simple static web app built in React',
                link: '/dev404',
                appScreen: 'portfolio'
            },
            {
                id: 9,
                title: 'Admin Panel for Food Delivery',
                description: 'Building of a web application to help restaurant manage their food delivery',
                link: 'https://lifter.life/',
                appScreen: 'lifterLife'
            },
            {
                id: 10,
                title: 'Video Ideas App',
                description: 'A simple web app to take and edit video ideas ;)',
                link: '/dev404',
                appScreen: 'vidjot'
            },
            {
                id: 11,
                title: 'Sample API and Client interface',
                description: 'Node.js API for restaurants with a client for CRUD operations',
                link: 'https://github.com/baedyl/client-vue',
                appScreen: 'restaurants'
            },
            {
                id: 12,
                title: 'Online Learning Platform',
                description: 'Building of an online learning platform',
                link: '/dev404',
                appScreen: 'learn'
            },
            {
                id: 13,
                title: 'App for a dental cabinet management',
                description: 'A desktop app built with Electron for the management of a dental care facility',
                link: 'https://github.com/baedyl/cabinet-dentaire',
                appScreen: 'dental'
            },
            {
                id: 14,
                title: 'Travel Agency Website',
                description: 'Dynamic Website to promote a travel agency and process reservations',
                link: 'https://github.com/baedyl/tours',
                appScreen: 'tours'
            }
        ];
    
        const elems = 
            projects.map((project) =>
                    
                <Card className="Card" key={ project.id } title={ project.title } description={ project.description } 
                    link={ project.link } screen={ project.appScreen } showModal={ () => this.showModal(project.link) }>
                </Card>   
                     
            );
        return(
            <main>
                <section>
                    <div className="Container">
                        { elems }          
                    </div>
                    <h3>And many more... ;)</h3>
                    <AnimBackground home="true" />
                </section>
                <ModalView show={ this.state.show } handleClose={ this.hideModal } className="modal">
                    <p>Modal</p>
                    <p>Data</p>
                </ModalView>
            </main>
            
            
        );
    }
    
}

export default Projects;