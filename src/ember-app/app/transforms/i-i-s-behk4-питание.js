import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПитаниеEnum from '../enums/i-i-s-behk4-питание';

export default FlexberryEnum.extend({
  enum: ПитаниеEnum,
  sourceType: 'IIS.Behk4.Питание'
});
