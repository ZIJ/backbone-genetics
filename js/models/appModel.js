define(['underscore', 'backbone', 'collections/geneticStringCollection', 'models/overlapGraphModel'],
    function(_, Backbone, GeneticStringCollection, OverlapGraphModel){
        'use strict';
        var AppModel = Backbone.Model.extend({
            initialize: function(){
                this.strings = new GeneticStringCollection();
                this.overlapGraph = new OverlapGraphModel({},{
                    nodes: this.strings
                });
            },

            addString: function(options){
                this.strings.add(options);
            }
        });
        return AppModel;
    });