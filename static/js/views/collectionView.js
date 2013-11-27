define(['underscore', 'backbone'],
    function (_, Backbone) {
        'use strict';
        // generic view class for displaying collections
        // subclasses are expected to call initialize()
        // custom render() is expected to define view.ui.container $-wrapped node
        var CollectionView = Backbone.View.extend({
            initialize: function(){
                var container = this.options.container;     //selector
                this.childViews = [];
                this.itemViewConstructor = this.options.itemView || Backbone.View;
                this.ui = {
                    container: container ? this.$el.find(container) : this.$el
                };
                this.listenTo(this.collection, 'add remove reset', this.render);
            },

            removeChildViews: function(){
                this.childViews.forEach(function(view){
                    view.remove();
                });
            },

            render: function(){
                var ItemView = this.itemViewConstructor;
                this.removeChildViews();
                this.childViews = this.collection.map(function(item){
                    return new ItemView({
                        model: item
                    });
                });
                this.renderChildViews();
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