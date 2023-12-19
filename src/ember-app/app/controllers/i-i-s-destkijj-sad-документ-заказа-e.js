import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-destkijj-sad-документ-заказа-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-destkijj-sad-запись+питания':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кодПитания',
            required: true,
            relationName: 'питания',
            projection: 'ПитанияL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-destkijj-sad-запись+сотрудники':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'сотрудники',
            projection: 'СотрудникиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
