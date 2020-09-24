import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Card.css';

const card = (props) => (
    <Aux>
        <div className="col-lg-4 col-md-6 ">
            <div className="card my-card">
                <img className="card-img-top" src={props.img} alt="Img Not available" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-title">{props.skills}</h6>
                    <a className="btn" href={props.url}>
                        <span className="btntext">View Now</span>
                    </a>
                </div>
            </div>
        </div>
    </Aux>
);

export default card;