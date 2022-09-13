export const Repeater = class {
  constructor(selectorString) {
    this.selectorString = selectorString;
  }

  $ = {
    selector: this.selectorString,
    el: document.querySelector('[data-repeater="tng-prop"]'),
  };
  hasEl() {
    console.log('el', this.$.el);
    return typeof this.$.el !== 'undefined' || this.$.el !== null;
  }
  htmlIn(pos) {
    //console.log('html in', this.$.selector);
    return this.hasEl()
      ? this.$.el.insertAdjacentHTML(pos, this.$.el.cloneNode(true).outerHTML)
      : '';
  }
};

