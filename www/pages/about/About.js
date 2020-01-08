import React from 'react';
// Components
import { Nav, Lorem } from '../../shared/components';
// Styles
import styles from './About.css';

const About = () => (
    <div className={ styles.about }>
        <h1>About</h1>
        <Nav />
        <Lorem />
    </div>
);

export default About;
