import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';
import React from 'react';

configure({ adapter: new Adapter() })

describe('<Title />', () => {
    const text = 'Test Title';
    const wrapper = mount(< Title title={text} inverted />);
    const value = wrapper.find("h2").text();

    it('accepts text to be displayed and inverted property as props', () => {
        expect(wrapper.props().title).toEqual(text);
        expect(wrapper.props().inverted).toEqual(true);
    })

    it('displays value passed as props', () => {
        expect(value).toEqual(text);
    })
});