// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        router.addRoute('', function() {
            $('body').html(new HomeView(service).render().$el);
        });

        router.addRoute('employees/:id', function(id) {
            service.findById(parseInt(id, 10)).done(function(employee) {
                $('body').html(new EmployeeView(employee).render().$el);
            });
        });

        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function() {
        if (navigator.notification) {
            window.alert = function(message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    'Workshop', // title
                    'OK'        // buttonName
                );
            }
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
}());