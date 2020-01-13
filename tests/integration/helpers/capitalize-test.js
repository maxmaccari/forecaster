import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | capitalize', function(hooks) {
  setupRenderingTest(hooks);

  test('capitalize the "a hello world" sentence', async function(assert) {
    this.set('inputValue', 'a hello world');

    await render(hbs`{{capitalize inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'A Hello World');
  });
});
