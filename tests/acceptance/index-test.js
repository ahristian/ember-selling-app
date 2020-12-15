import { module, test } from 'qunit';
import { visit, currentURL, server } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('should visiting /', async function(assert) {
    //server.create('product', 10);
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});


