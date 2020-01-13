import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | get-weather-icon', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders correct icon due to input', async function(assert) {
    this.set('inputValue', '04d');

    await render(hbs`{{get-weather-icon inputValue}}`);

    assert.equal(this.element.textContent.trim(), '021-cloud');
  });
});
