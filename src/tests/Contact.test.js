import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactDetails from '../components/ContactDetails/ContactDetails';
import Contact from '../components/Contact/Contact';
import React from 'react';

configure({ adapter: new Adapter() })

describe('<Contact />', () => {
    const wrapper = mount( < Contact / > );
    it('should render three contact details at all times', () => {
        expect((wrapper.find(ContactDetails).length)).toEqual(3);
        expect((wrapper.find(ContactDetails).length)).toBeGreaterThan(0);
    })
})