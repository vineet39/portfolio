import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Title.css';

const title = ( props ) => {
    return (
        <Aux>
            <div className={`title ${props.inverted ? 'title-inverted' : ''}`}>
                <h2>{props.title}</h2>
            </div>
            <div className={`title-bottom ${props.inverted ? 'title-bottom-inverted' : ''}`}></div>
        </Aux>
    );
};

export default title;