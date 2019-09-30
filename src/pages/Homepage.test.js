import React from 'react';
import { shallow, mount } from 'enzyme';

import Homepage from './Homepage'

describe('Homepage testing',() => {
    it('should render correctly in "Debug" mode',()=>{
        const component = shallow(<Homepage debug/>)
        expect(component).toMatchSnapshot()
    })

    it('should disable textarea when submit button is clicked',()=>{
        const component = mount(<Homepage/>)
        component
            .find('Button')
            .at(1)
            .simulate('click')
        const textarea = component.find('TextArea')
        expect(textarea.props().disabled).toEqual(true)
    })

    it('should make the Hour Glass Component visible', () => {
        const component = mount(<Homepage/>)
        component
            .find('Button')
            .at(1)
            .simulate('click')
        const hourglass = component.find('Hourglass')
        expect(hourglass.props().disabled).toEqual(undefined)
    })

    it('should create a blank page when x button is pressed',() => {
        const component = mount(<Homepage/>)
        component
            .find('Button')
            .at(0)
            .simulate('click')
        let window = component
            .find('Window')
        expect(window).toEqual({})
    })
})