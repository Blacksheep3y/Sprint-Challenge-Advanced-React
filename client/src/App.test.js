import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library//react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders the h1 (title) element", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("titleApp");
});

test("renders the button element", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("buttonDarkMode");
});

test("renders the array elements", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("arraySTUFF");
});

test("renders an h2 element for each 'name' within the array", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("arraySTUFF_NAME");
});

test("renders an h2 element for each 'country' within the array", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("arraySTUFF_COUNTRY");
});

test("renders an h2 element for each 'searches' within the array", () => {
  const containerForm = render(<App />);
  containerForm.queryByTestId("arraySTUFF_SEARCHES");
});

