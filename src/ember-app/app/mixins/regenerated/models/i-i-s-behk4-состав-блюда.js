import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-behk4-единица'),
  количество: DS.attr('number'),
  ингредиенты: DS.belongsTo('i-i-s-behk4-ингредиенты', { inverse: null, async: false }),
  питания: DS.belongsTo('i-i-s-behk4-питания', { inverse: 'составБлюда', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-behk4-состав-блюда.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-behk4-состав-блюда.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ингредиенты: {
    descriptionKey: 'models.i-i-s-behk4-состав-блюда.validations.ингредиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  питания: {
    descriptionKey: 'models.i-i-s-behk4-состав-блюда.validations.питания.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставБлюдаE', 'i-i-s-behk4-состав-блюда', {
    количество: attr('Количество', { index: 0 }),
    единицы: attr('Единица измерения', { index: 1 }),
    ингредиенты: belongsTo('i-i-s-behk4-ингредиенты', 'Ингредиенты', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
