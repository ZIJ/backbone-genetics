define(['underscore', 'backbone', 'jquery', 'templates'],
    function (_, Backbone, $, templates) {
        'use strict';
        var GeneticStringView = Backbone.View.extend({
            tagName: 'tr',
            template: templates.jst('string'),
            initialize: function(){

            },
            render: function(){
                this.$el.html(this.template(this.model.attributes));
            }
        });

        return GeneticStringView;

    });