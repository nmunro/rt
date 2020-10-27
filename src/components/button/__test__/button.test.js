import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button/>, div);
});


it('Renders button correctly', () => {
  const {getByTestId} = render(<Button label='Click Me'/>);
  expect(getByTestId('button')).toHaveTextContent('Click Me');
});

it('Renders different text', () => {
  const {getByTestId} = render(<Button label='Test Text'/>);
  expect(getByTestId('button')).toHaveTextContent('Test Text');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Button label="Click Me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
