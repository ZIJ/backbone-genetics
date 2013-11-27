define(['underscore', 'backbone', 'jquery', 'templates', 'views/collectionView', 'views/geneticStringView', 'views/overlapView'],
    function(_, Backbone, $, templates, CollectionView, GeneticStringView, OverlapView){
        'use strict';
        var AppView = Backbone.View.extend({
            template: templates.jst('editor'),

            events: {
                'click button.add': 'addString',
                'click button.regenerate': 'regenerateOverlapGraph',
                'input input.sequence': '_sequenceToUpperCase'
            },

            initialize: function(){

            },

            render: function(){
                this.$el.html(this.template(this.model.attributes));
                this.ui = {
                    nameInput: this.$el.find('input.name'),
                    sequenceInput: this.$el.find('input.sequence'),
                    addButton: this.$el.find('button.add'),
                    stringList: this.$el.find('table.stringList'),
                    overlapGraph: this.$el.find('table.overlapGraph')
                };
                //rendering sequence list
                if (this.stringList){
                    this.stringList.remove();
                }
                this.stringList = new CollectionView({
                    collection: this.model.strings,
                    itemView: GeneticStringView,
                    el: this.ui.stringList,
                    container: 'tbody'
                });
                this.stringList.render();
                //rendering overlap graph
                if (this.overlapGraph){
                    this.overlapGraph.remove();
                }
                this.overlapGraph = new CollectionView({
                    collection: this.model.overlapGraph.edges,
                    itemView: OverlapView,
                    el: this.ui.overlapGraph,
                    container: 'tbody'
                });
                this.overlapGraph.render();
            },

            addString: function(){
                var result = this.model.addString({
                    name: this.ui.nameInput.val(),
                    sequence: this.ui.sequenceInput.val()
                });
                if (result.error){
                    alert(result.error);
                }
            },

            regenerateOverlapGraph: function(){
                this.model.regenerateOverlapGraph();
            },

            _sequenceToUpperCase: function(){
                this.ui.sequenceInput.val(this.ui.sequenceInput.val().toUpperCase());
            }

        });
        return AppView;
    });