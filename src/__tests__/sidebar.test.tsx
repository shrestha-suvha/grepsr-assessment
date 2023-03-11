import { render, screen, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';

import Sidebar from 'src/components/Sidebar';

afterEach(() => {
  cleanup();
});

test('should render Sidebar component', () => {
  render(<Sidebar />);
  const SidebarElement = screen.getByTestId('Sidebar-1');
  const noSampleData = screen.getByText('No sample data');
  expect(SidebarElement).toBeInTheDocument();
  expect(noSampleData).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = create(<Sidebar />).toJSON();
  expect(tree).toMatchSnapshot();
});
