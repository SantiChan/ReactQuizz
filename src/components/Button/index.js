import React from 'react';
import { withRouter } from 'react-router'
import './style.css';

import { classNames } from '../../utils';

const Button = (props) => {
    const {
        history,
        children,
        to,
        onClick,
        gradiant,
        type,
        size,
        large
      } = props;

    const btnClass = classNames({
        'btn': true,
        'btn-grad': gradiant && (!type || !type === 'default'),
        'btn-big': size === 'big',
        'btn-small': size === 'small',
        'btn-positive': type === 'positive',
        'btn-negative': type === 'negative',
        'btn-large': large,
    });

        return(
            <button 
                type="button" 
                className={btnClass}
                onClick={(event) => {
                    onClick && onClick(event)
                    history.push(to)
                }}
            > 
                {children}
            </button>
        )
    
}


/**
 * Use React Router’s withRouter() to pass these props to your component:

 * history
 * location
 * match
 * staticContext
 */
export default withRouter(Button);