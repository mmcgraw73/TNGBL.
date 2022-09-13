// Import stylesheets
import './style.css';
import thing_json from './stuff.json' assert { type: 'json' };

import { Repeater } from './repeater.class';

import { Stuff_App } from './stuff_app.class';

const MCGRAWS_STUFF = new Stuff_App('MCGRAWS_STUFF');

const App = {
  $: {
    input: document.querySelector('[data-thing="new"]'),
    clean: document.querySelector('[data-stuff="clean"]'),
    label: document.querySelector('.input-value'),
    logg: document.getElementById('logg'),
    rpt: document.querySelector('[data-repeater="tng-prop"]'),
    count: 0,
    keys: Object.keys(thing_json),
    el: new Repeater('[data-repeater="tng-prop"]'),
    thing: {},
  },
  init() {
    const the_app = App.$;
    App.$.input.addEventListener('keyup', (e) => {
      //console.log('whaaaaa??', MCGRAWS_STUFF.attributes);
      if (e.key === 'Enter' && e.target.value.length) {
        //console.log('count', the_app.thing[the_app.keys[the_app.count]]);
        // console.log('turds', the_app.keys[the_app.count]);
        this.updateQuestion(the_app.keys[the_app.count], e.target.value);
        App.$.input.placeholder = `${thing_json[App.$.count]}`;
        App.$.input.value = '';
      }
    });

    App.$.logg.addEventListener('click', (e) => {
      this.updateQuestion(e.target.value);
      this.$.label.textContent = e.target.value;
    });
  },
  updateQuestion(key, val) {
    App.$.count = App.$.count + 1;
    console.log(App.$.count);
    App.$.el.updateLabel('afterend', App.$.keys[App.$.count], App.$.count);
    App.$.el.htmlIn('afterend', key, val);
    console.log('value', Object.keys(App.$.el));
    App.$.input.placeholder = App.$.keys[App.$.count];
  },
};
App.init();
