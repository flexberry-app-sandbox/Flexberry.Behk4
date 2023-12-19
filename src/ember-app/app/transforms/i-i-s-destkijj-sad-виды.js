import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидыEnum from '../enums/i-i-s-destkijj-sad-виды';

export default FlexberryEnum.extend({
  enum: ВидыEnum,
  sourceType: 'IIS.DestkijjSad.Виды'
});
