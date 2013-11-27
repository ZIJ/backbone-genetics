define(['underscore', 'backbone', 'models/overlapModel'],
    function (_, Backbone, OverlapModel) {
        'use strict';
        var OverlapCollection = Backbone.Collection.extend({
            model: OverlapModel,
            initialize: function(){

            }
        });
        return OverlapCollection;
    });