import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'super-rentals/tests/helpers';

module('Acceptance | super rentals', (hooks) => {
  setupApplicationTest(hooks);

  test('visiting /', async (assert) => {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('Welcome to Super Rentals!');
    assert.dom('.jumbo a.button').hasText('About Us');

    await click('.jumbo a.button');
    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async (assert) => {
    await visit('/about');
    assert.strictEqual(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('About Super Rentals');
    assert.dom('.jumbo a.button').hasText('Contact Us');

    await click('.jumbo a.button');
    assert.strictEqual(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async (assert) => {
    await visit('/getting-in-touch');
    assert.strictEqual(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('Contact Us');
    assert.dom('.jumbo a.button').hasText('About');

    await click('.jumbo a.button');
    assert.strictEqual(currentURL(), '/about');
  });
});
