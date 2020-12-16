import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function (assert) {
    this.server.createList('product', 10);
    await visit('/');

   // assert.equal(currentURL(), '/');
    assert.equal(this.element.querySelectorAll('.card').length, 10);
  });
});
/* 
test('clicking the card', async function (assert) {
  this.server.create('product', { name: "My awesome product" });
  await visit('/');
  await click('a.card:first');
  assert.equal(find('h2').text(), "My awesome product");
}) */

