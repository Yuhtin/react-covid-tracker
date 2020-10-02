export default class CountrySchema {
  static schema = {
    name: 'Country',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      cases: 'int',
      todayCases: 'int',
      deaths: 'int',
      recovered: 'int',
      casesPerMillion: 'int',
    },
  };
}
