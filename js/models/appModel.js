define(['underscore', 'backbone'],
    function(_, Backbone){
        var AppModel = Backbone.Model.extend({
            initialize: function(){
                console.log('app model created');
            }
        });
        return AppModel;
    });