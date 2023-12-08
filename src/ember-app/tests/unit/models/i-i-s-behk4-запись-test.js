import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-behk4-запись', 'Unit | Model | i-i-s-behk4-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-behk4-документ-заказа',
    'model:i-i-s-behk4-должности',
    'model:i-i-s-behk4-запись',
    'model:i-i-s-behk4-ингредиенты',
    'model:i-i-s-behk4-контрагенты',
    'model:i-i-s-behk4-питания',
    'model:i-i-s-behk4-состав-блюда',
    'model:i-i-s-behk4-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
