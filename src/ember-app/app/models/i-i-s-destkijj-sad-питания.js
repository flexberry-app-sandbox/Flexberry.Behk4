import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПитанияMixin
} from '../mixins/regenerated/models/i-i-s-destkijj-sad-питания';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПитанияMixin, Validations, {
});

defineProjections(Model);

export default Model;
