import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import FormikUserRegistration from './components/Userregistration';

afterEach(cleanup);

const addNums = FormikUserRegistration.addNums;

describe('<FormikUserRegistration/>', () => {
  it('Renders without fail', () => {
    render(<FormikUserRegistration/>);
  });

  it('Renders the Username input', () => {
    const { getByTestId } = render(<FormikUserRegistration/>);
    const name = getByTestId('name');
    expect(name).toBeVisible();
  });

  it('Syncs input', () => {
    const { getByTestId } = render(<FormikUserRegistration/>);
    const name = getByTestId('name');
    expect(name.value).toBe('');
    fireEvent.change(name, {target: {value: 'Test'}});
    expect(name.value).toBe('Test');
  });

  it('Adds two numbers and returns the result', () => {
    const expected = 3;
    const actual = addNums(1, 2);
    expect(actual).toBe(expected);
  });
});
