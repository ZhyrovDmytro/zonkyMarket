import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Header from '../components/Header';
import Main from '../components/Main';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it(' <App /> contains 1 Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });
    it(' <App /> contains 1 Main component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Main)).toHaveLength(1);
    });
});