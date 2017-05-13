"use strict";

(function () {
    var qraynix = {
        init: function init() {
            this.DOMCache();
            this.bindEvents();
        },
        DOMCache: function DOMCache() {
            this.navLinks = $(".item>a");
        },
        bindEvents: function bindEvents() {
            this.navLinks.on('click', this.disableNavLinks.bind(this));
        },
        disableNavLinks: function disableNavLinks(e) {
            var event = e || window.event;
            event.preventDefault();
        },
        removeClass: function removeClass(elName, className) {
            if (elName.length > 0) {
                for (var x = 0; x < elName.length; x++) {
                    elName[x].classList.remove(className);
                }
            } else {
                elName.classList.remove(className);
            }
            return elName;
        },
        addClass: function addClass(elName, className) {
            if (elName.length > 0) {
                for (var x = 0; x < elName.length; x++) {
                    elName[x].classList.add(className);
                }
            } else {
                elName.classList.add(className);
            }
            return elName;
        }
    };
    qraynix.init();
})();