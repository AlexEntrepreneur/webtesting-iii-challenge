
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

describe('Controls', () => {
  it('should render "lock" & "close" gate buttons succesfully', () => {
    const wrapper = rtl.render(<Controls />);
    expect(wrapper.queryByText('Lock Gate')).toBeTruthy();
    expect(wrapper.queryByText('Close Gate')).toBeTruthy();
  });

  it('should render "open" & "unlock" buttons succesfully', () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(wrapper.queryByText('Open Gate')).toBeTruthy();
    expect(wrapper.queryByText('Unlock Gate')).toBeTruthy();
  });

  it('should disable "lock gate" button if the gate is opened', () => {
    const wrapper = rtl.render(<Controls locked={false} closed={false} />);
    expect(wrapper.getByTestId('lock-unlock-btn'))
      .toBeDisabled();
  });

  it('should disable "open gate" button if the gate is locked', () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(wrapper.getByTestId('open-close-btn'))
      .toBeDisabled();
  });
});
