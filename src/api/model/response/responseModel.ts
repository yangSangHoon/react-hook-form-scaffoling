export interface CommonResponse {
  code: number;
}

export interface ListModel<T> {
  total: number;
  rows: Array<T>;
}
