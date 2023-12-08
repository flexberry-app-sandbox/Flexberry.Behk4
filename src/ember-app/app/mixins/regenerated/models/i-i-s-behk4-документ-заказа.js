import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДокумента: DS.attr('date'),
  заказОтправ: DS.attr('boolean'),
  заказПолучен: DS.attr('boolean'),
  заказСобран: DS.attr('boolean'),
  кодДокумента: DS.attr('number'),
  сумма: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-behk4-контрагенты', { inverse: null, async: false }),
  запись: DS.hasMany('i-i-s-behk4-запись', { inverse: 'документЗаказа', async: false })
});

export let ValidationRules = {
  датаДокумента: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.датаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заказОтправ: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.заказОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказПолучен: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.заказПолучен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказСобран: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.заказСобран.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДокумента: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.кодДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-behk4-документ-заказа.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументЗаказаE', 'i-i-s-behk4-документ-заказа', {
    кодДокумента: attr('Код документа', { index: 0 }),
    датаДокумента: attr('Дата документа', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    заказСобран: attr('Заказ собран', { index: 3 }),
    заказОтправ: attr('Заказ отправлен', { index: 4 }),
    заказПолучен: attr('Заказ получен', { index: 5 }),
    контрагенты: belongsTo('i-i-s-behk4-контрагенты', 'Контрагенты', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    запись: hasMany('i-i-s-behk4-запись', 'Запись', {
      сумма: attr('Сумма', { index: 0 }),
      питания: belongsTo('i-i-s-behk4-питания', 'Питания', {
        кодПитания: attr('Код питания', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'кодПитания' }),
      сотрудники: belongsTo('i-i-s-behk4-сотрудники', 'Сотрудники', {
        фамилия: attr('Фамилия', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фамилия' })
    })
  });

  modelClass.defineProjection('ДокументЗаказаL', 'i-i-s-behk4-документ-заказа', {
    кодДокумента: attr('Код документа', { index: 0 }),
    датаДокумента: attr('Дата документа', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    заказСобран: attr('Заказ собран', { index: 3 }),
    заказОтправ: attr('Заказ отправлен', { index: 4 }),
    заказПолучен: attr('Заказ получен', { index: 5 }),
    контрагенты: belongsTo('i-i-s-behk4-контрагенты', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
