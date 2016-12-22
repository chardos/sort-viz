import React from 'react';
import classNames from 'classnames';
import './Node.scss';

export default Node = function (props) {
    const style = {
        transform: `translateX(${props.position}px)`
    }
    const classes = classNames(
        'node',
        {active: props.active},
        {selected: props.selected},
        {'not-found': props.notFound},
        {found: props.found}
    )

    return (
        <div className={classes}
            style={style}
            onClick={ () => props.setSearchedValue(props.children) }
        >
            {props.children}
        </div>
    );
};
