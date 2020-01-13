import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | errors-message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ErrorsMessage />`);

    assert.equal(
      this.element.textContent.includes(
        "Sorry, the city that you're searching for does not exists in our database."
      ),
      true
    );
  });
});
