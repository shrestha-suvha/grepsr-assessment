export interface IDataSet {
  geo_id: string;
  location: string;
  contact_no: string;
  id: string;
}

export interface IDataTableDetail {
  columnName: string;
  description: string;
  fillRate: number;
  id: string;
}

export interface IDataSetList extends Array<IDataSet> {}
export interface IDataTableDetailList extends Array<IDataTableDetail> {}
