import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-destkijj-sad-запись', 'Unit | Serializer | i-i-s-destkijj-sad-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-destkijj-sad-запись',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-behk4-виды',
    'transform:i-i-s-behk4-единица',
    'transform:i-i-s-behk4-питание',
    'transform:i-i-s-behk4-полы',
    'transform:i-i-s-destkijj-sad-виды',
    'transform:i-i-s-destkijj-sad-единица',
    'transform:i-i-s-destkijj-sad-питание',
    'transform:i-i-s-destkijj-sad-полы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
