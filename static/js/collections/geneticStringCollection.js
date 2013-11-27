define(['underscore', 'backbone', 'models/geneticStringModel'],
    function (_, Backbone, GeneticStringModel) {
        'use strict';

        var GeneticStringCollection = Backbone.Collection.extend({
            model: GeneticStringModel,
            initialize: function(){
                console.log('genetic string collection created');
            }
        });
        return GeneticStringCollection;

    });