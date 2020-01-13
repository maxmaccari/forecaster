import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forecast/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forecast/show');
    assert.ok(route);
  });
});
