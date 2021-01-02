import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../components/Card/Card';
import React from 'react';
import burger_img from '../assets/images/burger.png';
import dating_img from '../assets/images/dating.jpeg';

configure({ adapter: new Adapter() })
const baseURL = "https://github.com/";
describe('Check text in <Card /> buttons', () => {
    const details = [
        { img: burger_img, title: "Burger Ordering Website", skills: "React JS, Redux, Jest, Enzyme", url: baseURL + "vineet39/react-burger-app.git", liveURL: "https://vineet39.github.io/react-burger-app/", videoURL:"" },
        { img: dating_img, title: "Dating Website", skills: ".Net Core 3.0, Angular 8, TypeScript", url: baseURL + "vineet39/dating-app", liveURL: "", videoURL:"https://youtu.be/AmxZA5F4Yy8" },
    ];
    
    it('should render a button with a live link and not video link', () => {
        const wrapper = mount(<Card img={details[0].img} title={details[0].title} skills={details[0].skills} url={details[0].url} liveURL={details[0].liveURL} videoURL={details[0].videoURL}/>);
        const button = wrapper.find('#liveAt');
        expect(button.text()).toBe('Live At ');
        expect(wrapper.find('.fa-external-link-alt').length).toEqual(1);
        expect(wrapper.find('.fa-youtube').length).toEqual(0);
    })

    it('should render a button with a video link and not live link', () => {
        const wrapper = mount(<Card img={details[1].img} title={details[1].title} skills={details[1].skills} url={details[1].url} liveURL={details[1].liveURL} videoURL={details[1].videoURL}/>);
        const button = wrapper.find('#view');
        expect(button.text()).toBe('View ');
        expect(wrapper.find('.fa-external-link-alt').length).toEqual(0);
        expect(wrapper.find('.fa-youtube').length).toEqual(1);
    })
})