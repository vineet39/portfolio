import React from 'react';
import Aux from '../../hoc/Aux';
import classNames from './Profile.css';

const profile = () => {
    const details = {
        intro: "Hii! I am Vineet Bugtani",
        profile: "Analytically minded and collaborative individual desiring the job of a software developer. Bringing expertise in writing both front-end and back-end code with a willingness to learn new technologies and embrace challenging tasks at work.",
    };

    return (
        <Aux>
            <div className="profile" id="profile">
                <h2>{details.intro}</h2>
                <h3>{details.profile}</h3>
                <a className="profile-btn text-center" href="https://drive.google.com/uc?export=download&id=1kY8FVWzLC9NrXreYDQbgM3l6dFtxCwqX">
                    <span className="profile-btntext">Download Resume</span>
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#990000" fill-opacity="1"
                    d="M0,288L30,245.3C60,203,120,117,180,112C240,107,300,181,360,181.3C420,181,480,107,540,80C600,53,660,75,720,122.7C780,171,840,245,900,277.3C960,309,1020,299,1080,288C1140,277,1200,267,1260,234.7C1320,203,1380,149,1410,122.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
                </path>
            </svg>
        </Aux>
    );
};

export default profile;