define(['underscore', 'backbone'],
    function (_, Backbone) {
        'use strict';
        // generic view class for displaying collections
        // subclasses are expected to call initialize()
        // custom render() is expected to define view.ui.container $-wrapped node
        var CollectionView = Backbone.View.extend({
            initialize: function(){
                this.childViews = [];
                this.listenTo(this.collection, 'add remove reset', this.render);
            },

            removeChildViews: function(){
                this.childViews.forEach(function(view){
                    view.remove();
                });
            },

            renderChildViews: function(){
                var listView = this;
                this.childViews.forEach(function(childView){
                    childView.render();
                    listView.ui.container.append(childView.el);
                });
            }
        });
        return CollectionView;
    });