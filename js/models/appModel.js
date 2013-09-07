define(['underscore', 'backbone', 'collections/geneticStringCollection'],
    function(_, Backbone, GeneticStringCollection){
        var AppModel = Backbone.Model.extend({
            initialize: function(){
                this.strings = new GeneticStringCollection();
            },

            addString: function(options){
                this.strings.add(options);
            }
        });
        return AppModel;
    });