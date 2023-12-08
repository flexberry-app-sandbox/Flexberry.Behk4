import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставБлюдаMixin
} from '../mixins/regenerated/models/i-i-s-behk4-состав-блюда';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставБлюдаMixin, Validations, {
});

defineProjections(Model);

export default Model;
