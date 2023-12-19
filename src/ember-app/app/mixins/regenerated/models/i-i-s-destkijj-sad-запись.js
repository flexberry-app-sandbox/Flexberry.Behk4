import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сумма: DS.attr('number'),
  питания: DS.belongsTo('i-i-s-destkijj-sad-питания', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-destkijj-sad-сотрудники', { inverse: null, async: false }),
  документЗаказа: DS.belongsTo('i-i-s-destkijj-sad-документ-заказа', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  сумма: {
    descriptionKey: 'models.i-i-s-destkijj-sad-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  питания: {
    descriptionKey: 'models.i-i-s-destkijj-sad-запись.validations.питания.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-destkijj-sad-запись.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документЗаказа: {
    descriptionKey: 'models.i-i-s-destkijj-sad-запись.validations.документЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-destkijj-sad-запись', {
    сумма: attr('Сумма', { index: 0 }),
    питания: belongsTo('i-i-s-destkijj-sad-питания', 'Питания', {
      кодПитания: attr('Код питания', { index: 2, hidden: true }),
      наименования: attr('Наименование питания', { index: 3 }),
      видПитания: attr('Вид питания', { index: 4 })
    }, { index: 1, displayMemberPath: 'кодПитания' }),
    сотрудники: belongsTo('i-i-s-destkijj-sad-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 6, hidden: true }),
      имя: attr('', { index: 7 }),
      отчество: attr('', { index: 8 })
    }, { index: 5, displayMemberPath: 'фамилия' })
  });
};
