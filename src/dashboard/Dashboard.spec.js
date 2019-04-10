import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard', () => {
  it('should render controls component', () => {
    const wrapper = rtl.render(<Dashboard />);
    const controlsComponent = wrapper.container.querySelector('.controls.panel');
    expect(controlsComponent).toBeInTheDocument();
  });

  it('should render display component', () => {
    const wrapper = rtl.render(<Dashboard />);
    const controlsComponent = wrapper.container.querySelector('.display.panel');
    expect(controlsComponent).toBeInTheDocument();
  });
});
