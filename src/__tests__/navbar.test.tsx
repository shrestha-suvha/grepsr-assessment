import { render, screen, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';

import Navbar from 'src/components/Navbar';

afterEach(() => {
  cleanup();
});

test('should render navbar component', () => {
  render(<Navbar title={''} />);
  const navbarElement = screen.getByTestId('navbar-1');
  const searchFieldElement = screen.queryByPlaceholderText('Search datasets');
  expect(navbarElement).toBeInTheDocument();
  expect(searchFieldElement).toBeInTheDocument();
});

test('should render navbar component with props title', () => {
  render(<Navbar title={'Test title'} />);
  const navbarElement = screen.getByTestId('navbar-1');
  expect(navbarElement).toHaveTextContent('Test title');
});

test('matches snapshot', () => {
  const tree = create(<Navbar title={'title'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
