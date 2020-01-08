import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        x: [600, 0],
        transition: {
            type: 'tween',
            duration: 0.8,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
};

const Transition = ({ children }) => (
    <motion.div
        variants={ variants }
        initial="initial"
        animate="enter"
        exit="exit">
        { children }
    </motion.div>
);

Transition.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Transition;
