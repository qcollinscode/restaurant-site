(function() {
    const qraynix = {
        init: function() {
            this.DOMCache();
            this.bindEvents();
            this.datePlugin();
            this.timePlugin();
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
        datePlugin: function() {
            $(document).ready(function() {
                const date_input = $('input[name="date"]');
                const container = $('.date').parent();
                const options = {
                    format: 'mm/dd/yyyy',
                    container: container,
                    orientation: "top right",
                    todayHighlight: true,
                    autoclose: true,
                };
                date_input.datepicker(options);
            });
        },
        timePlugin: function() {
            $('.clockpicker').clockpicker({
                placement: 'bottom',
                align: 'right',
                donetext: 'Done',
                twelvehour: true
            });
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