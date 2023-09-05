import React from 'react';
import PropTypes from 'prop-types';

Buttons.propTypes = {
    update: PropTypes.func,
    buts: PropTypes.array
};

function Buttons({update, buts}) {
    const handleClick = (e)=>{
        update(e.target.innerText)
    }
    let buttons = buts.map(but => (<button key={but} onClick={handleClick}>{but}</button>));
    return (
        <div>
        <h2>Please leave <span style={{fontSize:10}}>feedback</span></h2>
            {buttons}
        </div>
    );
}

export default Buttons;