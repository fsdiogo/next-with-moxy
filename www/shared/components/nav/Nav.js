import React from 'react';
import Link from 'next/link';
// Styles
import styles from './Nav.css';

const Nav = () => (
    <nav className={ styles.nav }>
        <Link href="/"><a>Home</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/about"><a>About</a></Link>
    </nav>
);

export default Nav;
