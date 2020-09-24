import React from 'react';
import Aux from '../../hoc/Aux';
import Title from '../Title/Title';
import WorkTab from '../WorkTab/WorkTab';
import classes from './WorkExperience.css';
import $ from 'jquery';
import Popper from 'popper.js';

const workExperience = () => {
    const details = {
        Newgen: {
            companyname: "Web Developer, Newgen Apparel", detail: "One day/week | Melbourne | July 2020 - Ongoing"
            , responsibilities: ["Fixing bugs and issues reported to product owner by users", "Website maintenance and optimization."]
        },
        Jemena: {
            companyname: "Software Developer, Jemena", detail: "Part time| Melbourne | March 2020 - June 2020"
            , responsibilities: ["Coded the entire front-end of the prototype application in React Native– integrated a new feature into the application with each sprint. Made RESTful APIs in ASP.NET Core with another developer.", "Effectively translated business requirements into a technical design and transformed that design into a working application.",
                "Managed a team of five students including myself by conducting regular online meetings, delegating work to each team member depending on their current skill set."]
        },
        Accenture: {
            companyname: "Web Developer, Accenture", detail: "Full time | Mumbai | Nov 2016 - June 2018"
            , responsibilities: ["Developed UI and business logic of new features to be integrated in the website in .NET.", "Developed SQL stored procedures.", "Automated SQL scripting tasks that used to take 2 weeks/module to complete when typed manually. With the software written in object-oriented Excel VBA, the time taken to generate the scripts was cut down by 60% per module."]
        },
    };

    const items = Object.keys(details).map(key =>
        <WorkTab key={key} companyname={details[key].companyname} detail={details[key].detail} responsibilities={details[key].responsibilities} />
    );

    return (
        <Aux>
            <div className="experience">
                <Title title="Work Experience" inverted={true} />
                <div className="row work-row">
                    {items}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#990000" fill-opacity="1" d="M0,288L48,250.7C96,213,192,139,288,112C384,85,480,107,576,144C672,181,768,235,864,234.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </Aux>
    );
};

export default workExperience;