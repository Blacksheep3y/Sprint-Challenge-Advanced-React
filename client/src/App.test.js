import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test("renders labels for inputs", () => {
//   const containerForm = render(<App />);
//   containerForm.queryByTestId("first-name-label");
//   containerForm.queryByTestId("last-name-label");
//   containerForm.queryByTestId("email-label");
//   containerForm.queryByTestId("messages-label");
// });