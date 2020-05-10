import React from 'react';
import { withRouter } from 'react-router'
import './style.css';

import { classNames } from '../../utils';

const Button = (props) => {
    const {
        history,
        children,
        to,
        onClick
      } = props;

    const btnClass = classNames({
        'btn': true,
        'btn-grad': props.gradiant && (!props.type || !props.type === 'default'),
        'btn-big': props.size === 'big',
        'btn-small': props.size === 'small',
        'btn-positive': props.type === 'positive',
        'btn-negative': props.type === 'negative',
        'btn-large': props.large,
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