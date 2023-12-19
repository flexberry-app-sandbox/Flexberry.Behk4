import {
  defineNamespace,
  defineProjections,
  Model as ПитанияMixin
} from '../mixins/regenerated/models/i-i-s-destkijj-sad-питания';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПитанияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
