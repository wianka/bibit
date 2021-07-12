import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import Filter from './index';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Filter />
    </Provider>
  );

  expect(getByText(/Search/i)).toBeInTheDocument();
});