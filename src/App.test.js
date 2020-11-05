import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Contact from './components/Contact/Contact';
import React from 'react';
import Projects from '../src/components/Projects/Projects';
import WorkExperience from '../src/components/WorkExperience/WorkExperience';
import Profile from '../src/components/Profile/Profile';
import ScrollToTop from '../src/containers/ScrollToTop/ScrollToTop';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })

describe('<App />', () => {
    const wrapper = shallow( < App / > );
    it('should render all child components', () => {
        expect((wrapper.find(Contact).length)).toEqual(1);
        expect((wrapper.find(Projects).length)).toEqual(1);
        expect((wrapper.find(WorkExperience).length)).toEqual(1);
        expect((wrapper.find(ScrollToTop).length)).toEqual(1);
        expect(wrapper.containsMatchingElement( < Profile / > )).toEqual(true);
    })
    it('renders correctly', () => {
        const rendered = renderer.create(
            <App />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
})
