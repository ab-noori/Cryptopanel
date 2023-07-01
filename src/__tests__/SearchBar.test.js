import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('SearchBar component matches snapshot', () => {
  const { container } = render(
    <SearchBar
      value="test value"
      onChange={() => {}}
      onKeyDown={() => {}}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
