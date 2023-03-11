import { render, screen, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';

import DataTableList from 'src/components/DataList/components/DataTableList';

afterEach(() => {
  cleanup();
});

test('should render DataTableList component', () => {
  const dataSetList = [
    {
      geo_id: 'f9dd0ccdfc8e9ef1a7553c9a',
      location: 'Pontiac',
      contact_no: '(396) 401-6863 x0569',
      id: '1',
    },
  ];
  render(<DataTableList dataSetList={dataSetList} />);
  const dataSetListElement = screen.getByTestId('datasetlist-1');
  const tableElement = screen.getByRole('table');
  expect(dataSetListElement).toBeInTheDocument();
  expect(tableElement).toBeInTheDocument();
});

test('should render DataTableList with table header', () => {
  const dataSetList = [
    {
      geo_id: 'f9dd0ccdfc8e9ef1a7553c9a',
      location: 'Pontiac',
      contact_no: '(396) 401-6863 x0569',
      id: '1',
    },
  ];
  render(<DataTableList dataSetList={dataSetList} />);
  const tableHeaders = screen.getAllByRole('columnheader');
  expect(tableHeaders.length).toBe(3);
  expect(tableHeaders[0]).toHaveTextContent('geo_id');
  expect(tableHeaders[1]).toHaveTextContent('location');
  expect(tableHeaders[2]).toHaveTextContent('contact_no');
});

test('should render DataTableList component with props value', () => {
  const dataSetList = [
    {
      geo_id: 'f9dd0ccdfc8e9ef1a7553c9a',
      location: 'Pontiac',
      contact_no: '(396) 401-6863 x0569',
      id: '1',
    },
  ];
  render(<DataTableList dataSetList={dataSetList} />);
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('f9dd0ccdfc8e9ef1a7553c9a');
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('Pontiac');
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('(396) 401-6863 x0569');
});

test('matches snapshot', () => {
  const tree = create(<DataTableList dataSetList={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
