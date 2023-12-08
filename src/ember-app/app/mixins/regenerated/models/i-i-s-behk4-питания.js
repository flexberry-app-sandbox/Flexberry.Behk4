import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видПитания: DS.attr('i-i-s-behk4-питание'),
  кодПитания: DS.attr('number'),
  составБлюда: DS.hasMany('i-i-s-behk4-состав-блюда', { inverse: 'питания', async: false })
});

export let ValidationRules = {
  видПитания: {
    descriptionKey: 'models.i-i-s-behk4-питания.validations.видПитания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодПитания: {
    descriptionKey: 'models.i-i-s-behk4-питания.validations.кодПитания.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  составБлюда: {
    descriptionKey: 'models.i-i-s-behk4-питания.validations.составБлюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПитанияE', 'i-i-s-behk4-питания', {
    кодПитания: attr('Код питания', { index: 0 }),
    видПитания: attr('Вид питания', { index: 1 }),
    составБлюда: hasMany('i-i-s-behk4-состав-блюда', 'Состав блюда', {
      количество: attr('Количество', { index: 0 }),
      единицы: attr('Единица измерения', { index: 1 }),
      ингредиенты: belongsTo('i-i-s-behk4-ингредиенты', 'Ингредиенты', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ПитанияL', 'i-i-s-behk4-питания', {
    кодПитания: attr('Код питания', { index: 0 }),
    видПитания: attr('Вид питания', { index: 1 })
  });
};
