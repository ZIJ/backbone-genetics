define(['underscore', 'backbone', 'jquery', 'templates'],
    function(_, Backbone, $, templates){
        'use strict';
        var AppView = Backbone.View.extend({
            template: templates.jst('mainForm'),
            initialize: function(){
                templates.jst('mainForm');
                console.log('app view created');
            },
            render: function(){
                this.$el.html(this.template(this.model.attributes));
            }
        });
        return AppView;
    });