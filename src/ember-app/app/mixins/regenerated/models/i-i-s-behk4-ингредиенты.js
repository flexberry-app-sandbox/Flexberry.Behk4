import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-behk4-ингредиенты.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-behk4-ингредиенты.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнгредиентыE', 'i-i-s-behk4-ингредиенты', {
    наименование: attr('Наименование', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('ИнгредиентыL', 'i-i-s-behk4-ингредиенты', {
    наименование: attr('Наименование', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
