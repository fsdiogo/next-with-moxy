import React from 'react';
// Components
import { Nav, Lorem } from '../../shared/components';
// Styles
import styles from './Home.css';

const Home = () => (
    <div className={ styles.home }>
        <h1>Home</h1>
        <Nav />
        <Lorem />
    </div>
);

export default Home;
