import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | forecast/details', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:forecast/details');
    assert.ok(controller);
  });
});
