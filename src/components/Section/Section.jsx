import React from 'react';
import PropTypes from 'prop-types';
// import Container from '../container/Container';
import style from './Section.module.css';

const Section = ({ title, visuallyHidden, children }) => {
    return (
        <section className={style.container}>
            {title && (
                <h2
                    className={style.title}
                    visuallyHidden={visuallyHidden}
                >
                {title}
                </h2>
            )}
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    visuallyHidden: PropTypes.bool,
};

export default Section;