import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forecast-daily', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders three weathers from interval of 6 hours', async function(assert) {
    this.set('forecast', {
      list: [
        {
          main: {
            temp: 31.63,
          },
          weather: [
            {
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
          clouds: { all: 27 },
          dt_txt: '2020-01-13 15:00:00',
        },
        {},
        {
          main: {
            temp: 30.97,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
          },
          clouds: { all: 0 },
          dt_txt: '2020-01-13 21:00:00',
        },
        {},
        {
          main: {
            temp: 25.39,
          },
          weather: {
            description: '"overcast clouds"',
            icon: '04n',
          },
          clouds: { all: 89 },
          dt_txt: '2020-01-14 03:00:00',
        },
      ],
    });

    await render(hbs`<ForecastDaily @forecast={{this.forecast}} />`);

    assert.equal(this.element.textContent.trim().includes('32º'), true);
    assert.equal(
      this.element.textContent.trim().includes('89% cloudiness'),
      true
    );
  });
});
