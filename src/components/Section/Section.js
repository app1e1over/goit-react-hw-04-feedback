import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    render() {
        let content = this.props.children.map(c=>c);
        return (
            <div>
                <h2>{this.props.title}</h2>
                <>
                    {content}
                </>
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array
};

export default Section;