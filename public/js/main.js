'use strict';

(function () {
    var qraynix = {
        init: function init() {
            this.DOMCache();
            this.bindEvents();
            this.datePlugin();
            this.timePlugin();
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
        datePlugin: function datePlugin() {
            $(document).ready(function () {
                var date_input = $('input[name="date"]');
                var container = $('.date').parent();
                var options = {
                    format: 'mm/dd/yyyy',
                    container: container,
                    orientation: "top right",
                    todayHighlight: true,
                    autoclose: true,
                    assumeNearbyYear: true,
                    clearBtn: true,
                    startDate: '10d',
                    endDate: '+10d'
                };
                date_input.datepicker(options);
            });
        },
        timePlugin: function timePlugin() {
            $('.clockpicker').clockpicker({
                placement: 'bottom',
                align: 'left',
                donetext: 'Done',
                twelvehour: true
            });
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