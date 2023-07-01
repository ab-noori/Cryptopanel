import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Navbar component', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders correctly when on Cryptopanel page', () => {
    useSelector.mockReturnValue({
      CurrencyDetails: {
        name: 'Bitcoin',
        symbol: 'BTC',
      },
    });

    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly when not on Cryptopanel page', () => {
    useSelector.mockReturnValue({
      CurrencyDetails: {
        name: 'Ethereum',
        symbol: 'ETH',
      },
    });

    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
