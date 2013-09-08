define(['underscore', 'backbone', 'collections/geneticStringCollection', 'collections/overlapCollection'],
    function (_, Backbone, GeneticStringCollection, OverlapCollection) {
        'use strict';
        var OverlapGraphModel = Backbone.Model.extend({
            defaults: {
                overlapSize: 3
            },
            initialize: function(attributes, options){
                options = options || {};
                this.nodes = options.nodes || new GeneticStringCollection();
                this.edges = options.edges || new OverlapCollection();
                this.regenerate();
            },

            regenerate: function(){
                var graph = this;
                this.edges.reset();
                graph.nodes.each(function(node){
                    graph.checkNode(node);
                });
            },

            checkNode: function(node){
                var graph = this;
                var overlap = this.get('overlapSize');
                graph.nodes.each(function(otherNode){
                    //we can use explicit suffix / prefix method calls since they are memoized
                    if (otherNode !== node && node.suffix(overlap) === otherNode.prefix(overlap)){
                        graph.edges.add({
                            from: node,
                            to: otherNode
                        });
                    }
                });
            }

        });
        return OverlapGraphModel;
    });