import React from 'react';
import Aux from '../../hoc/Aux';
import Title from '../Title/Title';
import Card from '../Card/Card';
import bank_img from '../../assets/images/bank.jpg';
import angular_img from '../../assets/images/angular.jpg';
import jemena_img from '../../assets/images/jemena.png';
import rpc_img from '../../assets/images/rpc.jpg';
import aws_img from '../../assets/images/aws.png';
import burger_img from '../../assets/images/burger.png';

const projects = () => {
    const details = {
        first: { img: bank_img, title: "Client Banking Website", skills: ".Net Core 3.0", url: "https://github.com/rmit-wdt2020/customer-banking-application" },
        second: { img: angular_img, title: "Admin Banking Website", skills: ".Net Core 3.0, Angular 8", url: "https://github.com/rmit-wdt2020/admin-banking-application" },
        third: { img: jemena_img, title: "Jemena Gas App", skills: ".Net Core 3.0, React Native", url: "https://github.com/rmit-s3734938-vineet-bugtani/react-native-jemena-gasmeters" },
        fourth: { img: rpc_img, title: "Rock Paper Scissors", skills: "HTML, CSS, JS", url: "https://github.com/rmit-s3734938-vineet-bugtani/rock-paper-scissors-game-website" },
        fifth: { img: aws_img, title: "Cloud Computing Project", skills: "AWS Services", url: "https://github.com/rmit-s3740446-Ryan-Cassidy/CC-Assignment" },
        sixth: { img: burger_img, title: "Burger App(In Progress)", skills: "React JS", url: "https://github.com/vineet39/react-burger-app.git" }
    };

    const items = Object.keys(details).map(key =>
        <Card key={key} img={details[key].img} title={details[key].title} skills={details[key].skills} url={details[key].url} />
    );

    return (
        <Aux>
            <div className="container my-projects" id="my-projects">
                <Title title="My Projects" inverted={false} />
                <div className="row">{items}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#990000" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,229.3C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </Aux>
    );
};

export default projects;