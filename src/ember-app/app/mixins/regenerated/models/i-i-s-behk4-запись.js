import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сумма: DS.attr('number'),
  питания: DS.belongsTo('i-i-s-behk4-питания', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-behk4-сотрудники', { inverse: null, async: false }),
  документЗаказа: DS.belongsTo('i-i-s-behk4-документ-заказа', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  сумма: {
    descriptionKey: 'models.i-i-s-behk4-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  питания: {
    descriptionKey: 'models.i-i-s-behk4-запись.validations.питания.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-behk4-запись.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документЗаказа: {
    descriptionKey: 'models.i-i-s-behk4-запись.validations.документЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-behk4-запись', {
    сумма: attr('Сумма', { index: 0 }),
    питания: belongsTo('i-i-s-behk4-питания', 'Питания', {
      кодПитания: attr('Код питания', { index: 2, hidden: true }),
      видПитания: attr('', { index: 3 })
    }, { index: 1, displayMemberPath: 'кодПитания' }),
    сотрудники: belongsTo('i-i-s-behk4-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 5, hidden: true }),
      имя: attr('', { index: 6 }),
      отчество: attr('', { index: 7 })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });
};
