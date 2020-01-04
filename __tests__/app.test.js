import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/app';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
});