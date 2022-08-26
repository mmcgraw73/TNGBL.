export const Repeater = class {
  constructor(selectorString) {
    this.selectorString = selectorString;
  }

  $ = {
    selector: this.selectorString,
    el: document.querySelector(this.selectorString),
  };

  hasEl = () => this.$.el.children.length;

  htmlIn = (pos) =>
    this.hasEl
      ? $.el.insertAdjacentHTML(pos, el.cloneNode(true).outerHTML)
      : '';
};
