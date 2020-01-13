import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | next-days-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the optimal card value', async function(assert) {
    this.set('weather', {
      date: '2020-01-13',
      weathers: [
        {
          main: {
            temp: 31.63,
            temp_min: 28.75,
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
        {
          main: {
            temp: 30.97,
            temp_min: 27,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
          },
          clouds: { all: 0 },
          dt_txt: '2020-01-13 21:00:00',
        },
        {
          main: {
            temp: 25.39,
            temp_min: 25,
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

    await render(hbs`<NextDaysCard @weather={{ this.weather }} />`);

    assert.equal(this.element.textContent.includes('Monday 13'), true);
    assert.equal(this.element.textContent.includes('32º'), true);
    assert.equal(this.element.textContent.includes('27% cloudiness'), true);
    assert.equal(this.element.textContent.includes('29º low'), true);
  });
});
