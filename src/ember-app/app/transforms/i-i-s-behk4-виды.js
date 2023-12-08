import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидыEnum from '../enums/i-i-s-behk4-виды';

export default FlexberryEnum.extend({
  enum: ВидыEnum,
  sourceType: 'IIS.Behk4.Виды'
});
