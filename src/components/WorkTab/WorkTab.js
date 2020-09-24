import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './WorkTab.css';

const workTab = (props) => {
    const items = Object.keys(props.responsibilities).map(key => 
        <li key={key}>{props.responsibilities[key]}</li>
    );
    return (
        <Aux>
            <div className="work-tab">
                <h4 className="companyname">{props.companyname}</h4>
                <h5 className="details">{props.detail}</h5>
                <ul className="resp-list">
                    {items}
                </ul>
            </div>
        </Aux>
    );
};

export default workTab;