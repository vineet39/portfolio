import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './WorkTab.css';
import PropTypes from 'prop-types';

const workTab = (props) => {
    const items = Object.keys(props.responsibilities).map(key => 
        <li key={key}>{props.responsibilities[key]}</li>
    );
    return (
        <Aux>
            <div className="year"><span className="year-data">{props.year}</span></div>
            <div className="work-tab">
                <div className="circle"></div>
                <h4 className="companyname">{props.companyname}</h4>
                <h5 className="details">{props.detail}</h5>
                <h5 className="skills">{props.skills}</h5>
                <ul className="resp-list">
                    {items}
                </ul>
            </div>
        </Aux>
    );
};

workTab.propTypes = {
    year: PropTypes.string.isRequired,
    companyname: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  };

export default workTab;