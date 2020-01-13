import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | round', function(hooks) {
  setupRenderingTest(hooks);

  test('formats 10.25 as 10', async function(assert) {
    this.set('inputValue', 10.25);

    await render(hbs`{{round inputValue}}`);

    assert.equal(this.element.textContent.trim(), '10');
  });

  test('formats 10.75 as 11', async function(assert) {
    this.set('inputValue', 10.75);

    await render(hbs`{{round inputValue}}`);

    assert.equal(this.element.textContent.trim(), '11');
  });
});
