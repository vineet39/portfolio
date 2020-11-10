import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from './Profile.css';

const profile = () => {
    const details = {
        intro: "My name is Vineet. I am a...",
        profile: "Analytically minded and collaborative individual desiring the job of a software developer. I would be bringing to the table experience in writing full-stack code with a willingness to learn new technologies and embrace challenging tasks at work.",
    };

    return (
        <Aux>
            <div className="profile" id="profile">
                <h2>{details.intro}</h2>
                <h3>{details.profile}</h3>
                <a className="profile-btn text-center" href="https://drive.google.com/uc?export=download&id=1kY8FVWzLC9NrXreYDQbgM3l6dFtxCwqX">
                    Download Resume
                </a>
            </div>
        </Aux>
    );
};

export default profile;