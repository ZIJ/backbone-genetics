define(['underscore', 'backbone', 'jquery', 'templates'],
    function (_, Backbone, $, templates) {
        'use strict';
        var OverlapView = Backbone.View.extend({
            tagName: 'tr',
            template: templates.jst('overlap'),
            initialize: function(){

            },
            render: function(){
                this.$el.html(this.template({
                    from: this.model.get('from').get('name'),
                    to: this.model.get('to').get('name')
                }));
            }
        });

        return OverlapView;

    });