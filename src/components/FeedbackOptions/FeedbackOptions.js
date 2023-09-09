import React, { Component } from 'react';
import PropTypes from 'prop-types';



class FeedbackOptions extends Component {
    handleClick = (e)=>{
        this.props.onLeaveFeedback(e.target.innerText)
    }
    render(){
        const{options} = this.props;
        let buttons = options.map(but => (<button key={but} onClick={this.handleClick}>{but}</button>));
        return (
            <div>
            
                {buttons}
            </div>
        );
    }

}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array
};

export default FeedbackOptions;