(function() {
    const qraynix = {
        init: function() {
            this.DOMCache();
            this.bindEvents();
        },
        DOMCache: function() {
            this.navLinks = $(".item>a");
        },
        bindEvents: function() {
            this.navLinks.on('click', this.disableNavLinks.bind(this));

        },
        disableNavLinks: function (e) {
            const event = e || window.event;
            event.preventDefault();
        },
        removeClass: function(elName, className) {
            if (elName.length > 0) {
                for(var x = 0; x < elName.length; x++) {
                    elName[x].classList.remove(className);
                }
            } else {
                elName.classList.remove(className);
            }
            return elName;
        },
        addClass: function(elName, className) {
            if (elName.length > 0) {
                for(var x = 0; x < elName.length; x++) {
                    elName[x].classList.add(className);
                }
            } else {
                elName.classList.add(className);
            }
            return elName;
        }
    };
    qraynix.init();
}());