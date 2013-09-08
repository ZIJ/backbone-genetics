define(['underscore', 'backbone'],
    function(_, Backbone){
        'use strict';
        var GeneticStringModel = Backbone.Model.extend({
            initialize: function(){

            },

            prefix: _.memoize(function(size){
                var sequence = this.get('sequence');
                return sequence.slice(0, size - 1);
            }.bind(this)),

            suffix: _.memoize(function(size){
                var sequence = this.get('sequence');
                return sequence.slice(sequence.length - 1 - size);
            }.bind(this))
        });
        return GeneticStringModel;
    });