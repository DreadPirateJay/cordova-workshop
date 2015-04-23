'use strict';

var EmployeeView = function(employee) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        console.log(this);
        this.$el.html(this.template(employee));

        return this;
    };

    this.initialize();
};

EmployeeView.prototype.template = Handlebars.compile($('#employee-tpl').html());