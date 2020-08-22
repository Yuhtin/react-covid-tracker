import Realm from 'realm';

import RepositorySchema from '~/schemas/CountrySchema';

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
