define(['underscore', 'backbone', 'jquery', 'templates'],
    function(_, Backbone, $, templates){
        'use strict';
        var AppView = Backbone.View.extend({
            template: templates.jst('mainForm'),

            events: {
                'click button.add': 'addString'
            },

            initialize: function(){

            },

            render: function(){
                this.$el.html(this.template(this.model.attributes));
                this.ui = {
                    nameInput: this.$el.find('input.name'),
                    sequenceInput: this.$el.find('input.sequence'),
                    addButton: this.$el.find('button.add')
                };
            },

            addString: function(){
                this.model.addString({
                    name: this.ui.nameInput.val(),
                    sequence: this.ui.sequenceInput.val()
                });
            }

        });
        return AppView;
    });