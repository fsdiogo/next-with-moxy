import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import Modal from '@moxy/react-modal';
import { Contacts } from '../../shared/components';

import styles from './Home.css';

const Home = () => {
    const modalRef = useRef();

    const handleClick = useCallback(() => {
        modalRef.current.open();
    }, []);

    return (
        <div className={ styles.home }>
            <Link href="/foo">
                <a>Foo</a>
            </Link>
            <div>
                <FormattedMessage id="home.title" />
                <Contacts />
            </div>
            <button onClick={ handleClick }>Open</button>
            <Modal ref={ modalRef }>
                This is modal content
            </Modal>
        </div>
    );
};

export default Home;
