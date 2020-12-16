import { module, test } from 'qunit';
import { visit, currentURL, click, server } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should visiting /', async function(assert) {
    this.server.createList('product', 10);
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(this.element.querySelectorAll('a.card').length, 10);
  });

 test( 'clicking the card', async function(assert){
  this.server.create('product', {name: "My awesome product"});
  await visit('/');
  await click('a.card');
  assert.equal(this.element.querySelectorAll('h2')[0].textContent, "My awesome product");
});
});

