import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | product', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('product', {});
    assert.ok(model);
  });


test('it displays price with tax', function(assert){
  
  let price = parseFloat(Math.random() * 1000);
  let store = this.owner.lookup('service:store');
  let model = store.createRecord('product', {price: price});
  let tax = price * 25/100;

  assert.equal(model.get('displayPrice'), price + tax)
});
});