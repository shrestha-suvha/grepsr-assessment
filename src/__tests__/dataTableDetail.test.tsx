import { render, screen, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';

import DataTableDetail from 'src/components/DataList/components/DataTableDetail';

afterEach(() => {
  cleanup();
});

test('should render DataTableDetail component', () => {
  const dataSetColumnDetailList = [
    {
      columnName: 'GEO ID',
      description: 'Unique POI identifier for each locations',
      fillRate: 10,
      id: '1',
    },
  ];
  render(<DataTableDetail dataSetColumnDetailList={dataSetColumnDetailList} />);
  const dataSetColumnDetailListElement = screen.getByTestId('dataTableDetail-1');
  const tableElement = screen.getByRole('table');
  expect(dataSetColumnDetailListElement).toBeInTheDocument();
  expect(tableElement).toBeInTheDocument();
});

test('should render DataTableDetail with table header', () => {
  const dataSetColumnDetailList = [
    {
      columnName: 'GEO ID',
      description: 'Unique POI identifier for each locations',
      fillRate: 10,
      id: '1',
    },
  ];
  render(<DataTableDetail dataSetColumnDetailList={dataSetColumnDetailList} />);
  const tableHeaders = screen.getAllByRole('columnheader');
  expect(tableHeaders.length).toBe(2);
  expect(tableHeaders[0]).toHaveTextContent('Column name');
  expect(tableHeaders[1]).toHaveTextContent('Description');
});

test('should render DataTableDetail component with props value', () => {
  const dataSetColumnDetailList = [
    {
      columnName: 'GEO ID',
      description: 'Unique POI identifier for each locations',
      fillRate: 10,
      id: '1',
    },
  ];
  render(<DataTableDetail dataSetColumnDetailList={dataSetColumnDetailList} />);
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('GEO ID');
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('Unique POI identifier for each locations');
  expect(screen.getAllByRole('row')[1]).toHaveTextContent('10');
});

test('matches snapshot', () => {
  const tree = create(<DataTableDetail dataSetColumnDetailList={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
