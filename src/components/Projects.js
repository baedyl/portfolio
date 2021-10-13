import React, { Component } from 'react';
import AnimBackground from './AnimBackgroung';
import Card from './Card';
import ModalView from './ModalView';

import './style/Projects.css';
class Projects extends Component {
//const Projects = () => {
    state = { show: false };

    showModal = () => {
        this.setState(
            {
                show: true
            }
        );
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
                title: 'App for a dental cabinet management',
                description: 'A desktop app built with Electron for the management of a dental care facility',
                link: '/dev404',
                appScreen: 'dental'
            },
            {
                id: 2,
                title: 'Admin Panel for Food Delivery',
                description: 'Building of a web application to help restaurant manage their food delivery',
                link: '/dev404',
                appScreen: 'lifterLife'
            },
            {
                id: 3,
                title: 'Sample API and Client interface',
                description: 'Node.js API for restaurants with a client for CRUD operations',
                link: '/dev404',
                appScreen: 'restaurants'
            },
            {
                id: 4,
                title: 'E-Commerce Website Theme',
                description: 'Creation of a complete theme for an online boutique',
                link: '/dev404',
                appScreen: 'creasouk'
            },
            {
                id: 5,
                title: 'Travel Agency Website',
                description: 'Dynamic Website to promote a travel agency and process reservations',
                link: '/dev404',
                appScreen: 'tours'
            },
            {
                id: 6,
                title: 'Online Learning Platform',
                description: 'Building of an online learning platform',
                link: '/dev404',
                appScreen: 'learn'
            },
            {
                id: 7,
                title: 'Video Ideas App',
                description: 'A simple web app to take and edit video ideas ;)',
                link: '/dev404',
                appScreen: 'vidjot'
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
                title: 'Scalinflow',
                description: 'Sales outreach SaaS',
                link: '/dev404',
                appScreen: 'scalinflow'
            },
            {
                id: 10,
                title: 'MyGoodBoss',
                description: "A manager's virtual assistant",
                link: '/dev404',
                appScreen: 'mgb'
            },
            {
                id: 11,
                title: 'Coach Celo',
                description: 'Beauty services landing page',
                link: '/dev404',
                appScreen: 'celo'
            },
            {
                id: 12,
                title: 'News App',
                description: 'Display and filter recent headlines from newsapi.org',
                link: '/dev404',
                appScreen: 'newsapp'
            }
        ];
    
        const elems = 
            projects.map((project) =>
                    
                <Card className="Card" key={ project.id } title={ project.title } description={ project.description } 
                    link={ project.link } screen={ project.appScreen } showModal={ this.showModal }>
                </Card>   
                     
            );
        return(
            <main>
                <section>
                    <div className="Container">
                        { elems }          
                    </div>
                    <h3>And many more... ;)</h3>
                    <AnimBackground />
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