import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокументЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-behk4-документ-заказа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокументЗаказаMixin, Validations, {
});

defineProjections(Model);

export default Model;
