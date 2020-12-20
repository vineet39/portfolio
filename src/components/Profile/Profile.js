import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from './Profile.css';

const profile = () => {
    const details = {
        intro: "HII! I'M VINEET",
        profile: "I am a recent graduate from RMIT university with prior industry experience in web development. I am currently seeking a full-time software developer role.",
    };

    return (
        <Aux>
            <div className="profile" id="profile">
                <p>{details.intro}</p>
                <h3>{details.profile}</h3>
            </div>
        </Aux>
    );
};

export default profile;