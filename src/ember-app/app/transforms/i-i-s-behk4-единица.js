import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницаEnum from '../enums/i-i-s-behk4-единица';

export default FlexberryEnum.extend({
  enum: ЕдиницаEnum,
  sourceType: 'IIS.Behk4.Единица'
});
