'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement = function(){
    if (this.selector[0] === '.') {
        let blockElem = document.createElement('div');
        blockElem.classList.add(this.selector);
        blockElem.style.height = this.height + 'px';
        blockElem.style.width = this.width + 'px';
        blockElem.style.background = this.bg;
        blockElem.style.font = this.fontSize + 'px';
        blockElem.textContent = 'Блок "div": ' + 'ID: ' + this.selector + ', ' + 'Ширина: ' + this.height + 'px, ' + 
        'Высота: ' + this.width + 'px, ' + 'Размер шрифта: ' + this.fontSize + 'px';
        document.body.append(blockElem);
    } else if (this.selector[0] === '#') {
        let paragraphElem = document.createElement('p');
        paragraphElem.id = this.selector.substr(1);
        paragraphElem.style.height = this.height + 'px';
        paragraphElem.style.width = this.width  + 'px';
        paragraphElem.style.background = this.bg;
        paragraphElem.style.font = this.fontSize;
        paragraphElem.textContent = 'Блок "p": ' + 'ID: ' + this.selector + ', ' + 'Ширина: ' + this.height + 'px, ' + 
        'Высота: ' + this.width + 'px, ' + 'Размер шрифта: ' + this.fontSize + 'px';
        document.body.append(paragraphElem);
    }
};

let block1 = new DomElement('.test', '160', '152', '#e4e424', '13');
let block2 = new DomElement('#test', '150', '150', '#e41424', '33');

block1.createElement();
block2.createElement();