import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Controls', () => {
  it('should show "unlocked" & "open" diplay buttons as default', () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText('Unlocked')).toBeTruthy();
    expect(wrapper.queryByText('Open')).toBeTruthy();
  });

  it('should show "locked" & "closed" diplay buttons to reflect state', () => {
    const wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText('Locked')).toBeTruthy();
    expect(wrapper.queryByText('Closed')).toBeTruthy();
  });

  it('should use "green-led" class for display buttons by default', () => {
    const wrapper = rtl.render(<Display />);

    expect(wrapper.getByTestId('lock-unlock-display-btn'))
      .toHaveClass('green-led');
    expect(wrapper.getByTestId('lock-unlock-display-btn'))
      .toHaveClass('green-led');
  });
});
