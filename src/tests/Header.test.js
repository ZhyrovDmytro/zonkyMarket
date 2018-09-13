import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it(' <Header /> contains 1 <img />', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
    });
});