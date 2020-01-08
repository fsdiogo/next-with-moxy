import React from 'react';
// Components
import { Nav, Lorem } from '../../shared/components';
// Styles
import styles from './Contact.css';

const Contact = () => (
    <div className={ styles.contact }>
        <h1>Contact</h1>
        <Nav />
        <Lorem />
    </div>
);

export default Contact;
