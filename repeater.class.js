var torepeat=document.querySelectorAll("[data-repeat]");

for (a=0;a<torepeat.length;a+=1) {
    var el=torepeat[a];
    var rpt=el.getAttribute("data-repeat");

    for (r=0;r<rpt;r+=1) {
        el.insertAdjacentHTML('afterend',el.cloneNode(true).outerHTML);
    }
}


export const Repeater = class {
  constructor(name, htmlStr, el) {
    this.name = name;
    this.htmlStr = htmlStr;
    this.el = el
  }

  // element 
}