import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-behk4-сотрудники', 'Unit | Serializer | i-i-s-behk4-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-behk4-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-behk4-виды',
    'transform:i-i-s-behk4-единица',
    'transform:i-i-s-behk4-питание',
    'transform:i-i-s-behk4-полы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
