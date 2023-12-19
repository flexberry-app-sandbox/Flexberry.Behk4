import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-destkijj-sad-состав-блюда', 'Unit | Model | i-i-s-destkijj-sad-состав-блюда', {
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
    'model:i-i-s-destkijj-sad-документ-заказа',
    'model:i-i-s-destkijj-sad-должности',
    'model:i-i-s-destkijj-sad-запись',
    'model:i-i-s-destkijj-sad-ингредиенты',
    'model:i-i-s-destkijj-sad-контрагенты',
    'model:i-i-s-destkijj-sad-питания',
    'model:i-i-s-destkijj-sad-состав-блюда',
    'model:i-i-s-destkijj-sad-сотрудники',
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
