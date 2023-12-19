import {
  defineNamespace,
  defineProjections,
  Model as ИнгредиентыMixin
} from '../mixins/regenerated/models/i-i-s-destkijj-sad-ингредиенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнгредиентыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
