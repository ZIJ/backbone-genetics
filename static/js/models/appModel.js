define(['underscore', 'backbone', 'config', 'models/geneticStringModel', 'collections/geneticStringCollection', 'models/overlapGraphModel'],
    function(_, Backbone, config, GeneticStringModel, GeneticStringCollection, OverlapGraphModel){
        'use strict';
        var AppModel = Backbone.Model.extend({
            initialize: function(){
                this.strings = new GeneticStringCollection();
                this.strings.url = '/strings';
                this.strings.fetch();
                this.overlapGraph = new OverlapGraphModel({
                    overlapSize: config.overlapSize
                },{
                    nodes: this.strings
                });
                this.listenTo(this.strings, 'add remove reset', this.regenerateOverlapGraph);
            },

            addString: function(options){
                options = _.extend(options || {},{
                    sequenceType: config.sequenceType
                });
                var newString = new GeneticStringModel(options);
                if (!newString.isValid()){
                    return {
                        error: newString.validationError
                    }
                }
                var existing = this.strings.findWhere({
                    name: options.name
                });
                if (existing){
                    return {
                        error: 'String with such name already exists'
                    };
                }
                newString.url = '/string';
                newString.save();
                this.strings.add(newString);
                return {
                    success: true
                };
            },

            regenerateOverlapGraph: function(){
                this.overlapGraph.regenerate();
            }
        });
        return AppModel;
    });