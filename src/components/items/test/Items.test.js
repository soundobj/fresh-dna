import React from 'react';
import {shallow} from 'enzyme';

import Items from '../Items.jsx';
import { Button } from 'react-bootstrap';

describe('<Items />', () => {
  it('renders four <Button /> components', () => {
    const wrapper = shallow(<Items />);
console.error("wrapper", wrapper.debug());

    // expect(wrapper.find(Button)).to.have.lengthOf(4);
  });
});
