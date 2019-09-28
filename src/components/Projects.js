import React from 'react';

import Card from './Card';

import './style/Projects.css';

const Projects = () => {
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
        }
    ];

    const elems = 
        projects.map((project) =>
            
            <Card className="Card" key={ project.id } title={ project.title } description={ project.description } 
                link={ project.link } screen={ project.appScreen }
            />
            
            
        );
    return(
        <section>
            <h3>My Projects Showcase :)</h3>
            <div className="Container">
                { elems }          
            </div>
            <h3>And many more... ;)</h3>
        </section>
        
    );
}

export default Projects;