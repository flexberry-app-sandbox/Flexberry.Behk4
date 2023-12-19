import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вид: DS.attr('i-i-s-destkijj-sad-виды'),
  кодКонтиагента: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  вид: {
    descriptionKey: 'models.i-i-s-destkijj-sad-контрагенты.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКонтиагента: {
    descriptionKey: 'models.i-i-s-destkijj-sad-контрагенты.validations.кодКонтиагента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-destkijj-sad-контрагенты.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентыE', 'i-i-s-destkijj-sad-контрагенты', {
    кодКонтиагента: attr('Код контиагента', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    вид: attr('Вид', { index: 2 })
  });

  modelClass.defineProjection('КонтрагентыL', 'i-i-s-destkijj-sad-контрагенты', {
    кодКонтиагента: attr('Код контиагента', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    вид: attr('Вид', { index: 2 })
  });
};
