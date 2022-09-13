export const Repeater = class {
  constructor(selectorString) {
    this.selectorString = selectorString;
  }

  $ = {
    selector: this.selectorString,
    el: document.querySelector('[data-repeater="tng-prop"]'),
    label: document.querySelector('[data-label="tng-label"]'),
    oldlabel: document.getElementsByTagName('h3'),
  };
  hasEl() {
    return typeof this.$.el !== 'undefined' || this.$.el !== null;
  }
  updateLabel(pos, value, idx) {
    this.$.label.insertAdjacentHTML(
      pos,
      `<h3 data-label="old-label">${value}</h3>`
    );
    console.log('len', this.$.label);
    console.log('el', this.$.el, this.$.oldlabel[0]);
    if (this.$.oldlabel.length > 1) {
      this.$.oldlabel[1].classList.add('hidden');
    }
  }
  htmlIn(pos, key, value) {
    //console.log('html in', this.$.selector);
    return this.hasEl()
      ? this.$.el.insertAdjacentHTML(
          pos,
          `<kbd class="kbd kbd-md mb-2">${key} <span class="text-secondary text-xl text-bolder pl-3">${value}</span></kbd>`
        )
      : '';
  }
};

//this.$.el.cloneNode(true).outerHTML
