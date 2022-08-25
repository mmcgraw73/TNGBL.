// Import stylesheets
import './style.css';
import thing_json from './stuff.json' assert { type: 'json' };

import { Stuff_App } from './stuff_app.class';

const MCGRAWS_SHIT = new Stuff_App('MCGRAWS_SHIT');

const App = {
  $: {
    input: document.querySelector('[data-thing="new"]'),
    clean: document.querySelector('[data-stuff="clean"]'),
    count: 0,
    keys: Object.keys(thing_json),
  },
  init() {
    App.$.input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && e.target.value.length) {
        App.$.count++;
        console.log('cound', App.$.count, App.$.keys[App.$.count + 1]);
        MCGRAWS_SHIT.addThing(e.target.value);
        App.$.input.placeholder = `${App.$.keys[App.$.count]}`;
        App.$.input.value = '';
      }
    });
  },
  updateQuestion() {
    const input = document.createElement('input');
    input.placeholder = `${keys[$.count]}`;
  },
};

App.init();

// const MCGRAWS_SHIT = new Stuff_App('MCGRAWS_SHIT');
// MCGRAWS_SHIT.addThing(
//   'Monster Squad',
//   'secured',
//   75,
//   200,
//   'Screen Print',
//   '',
//   '',
//   '116/150',
//   false,
//   'https://www.bottleneckgallery.com',
//   'BottleNeck Gallery'
// );

// MCGRAWS_SHIT.addThing(
//   'MAN THING',
//   'SECURED',
//   75,
//   250,
//   'SCREEN PRINT',
//   '',
//   '',
//   '106/140',
//   true,
//   'https://mondo.com',
//   'MONDO'
// );
