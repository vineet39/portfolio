import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../components/Title/Title';
import React from 'react';

configure({ adapter: new Adapter() })

describe('<Title />', () => {
    const text = 'Test Title';
    const wrapper = mount(< Title title={text} />);
    const value = wrapper.find("h2").text();

    it('accepts text to be displayed and inverted property as props', () => {
        expect(wrapper.props().title).toEqual(text);
    })

    it('displays value passed as props', () => {
        expect(value).toEqual(text);
    })
});