import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../Card/Card';
import Projects from './Projects';
import React from 'react';

configure({ adapter: new Adapter() })

describe('<Projects />', () => {
    const wrapper = shallow(<Projects / > );
    it('should render six or less side projects at any given time', () => {
        expect((wrapper.find(Card).length)).toBeLessThanOrEqual(6);
        expect((wrapper.find(Card).length)).toBeGreaterThan(0);
    })
})