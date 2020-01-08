import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import { Nav, Lorem } from '../../shared/components';
// Styles
import styles from './About.css';

class About extends Component {
    static pageTransitionDelayEnter = true;

    state = { loaded: false };

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.props.pageTransitionReadyToEnter();
            this.setState({ loaded: true });
        }, 2000);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        if (!this.state.loaded) {
            return null;
        }

        return (
            <div className={ styles.about }>
                <h1>About</h1>
                <Nav />
                <Lorem />
            </div>
        );
    }
}

About.propTypes = {
    pageTransitionReadyToEnter: PropTypes.func,
};

export default About;
