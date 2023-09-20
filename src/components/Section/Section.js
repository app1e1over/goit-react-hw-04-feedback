import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Section =(props)=>{

        let content = props.children.map(c=>c);
        return (
            <div>
                <h2>{props.title}</h2>
                <>
                    {content}
                </>
            </div>
        );
    
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array
};

export default Section;