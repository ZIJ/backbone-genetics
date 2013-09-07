define(['underscore', 'backbone', 'jquery', 'templates', 'views/geneticStringListView'],
    function(_, Backbone, $, templates, GeneticStringListView){
        'use strict';
        var AppView = Backbone.View.extend({
            template: templates.jst('editor'),

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
                    addButton: this.$el.find('button.add'),
                    stringList: this.$el.find('table.stringList')
                };
                if (this.stringList){
                    this.stringList.remove();
                }
                this.stringList = new GeneticStringListView({
                    collection: this.model.strings,
                    el: this.ui.stringList
                });
                this.stringList.render();
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