import thing_json from './stuff.json' assert { type: 'json' };

/**
 * @name Thing_Builder
 * @description component that creates UI for building a Thing object based on an imported JSON object model
 */

export const Thing_Builder = class {
  constructor() {
    // create properties based on imported JSON object
  }

  htmlString = `<li class="step step-secondary">
                  <input
                    type="text"
                    autofocus="true"
                    placeholder=""
                    data-thing="new"
                    class="new-thing input input-sm w-full max-w-xs"
                  />
                </li>`;
};
