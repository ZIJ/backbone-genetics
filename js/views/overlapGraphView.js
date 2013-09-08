define(['underscore', 'backbone', 'jquery', 'templates', 'views/collectionView', 'views/overlapView'],
    function (_, Backbone, $, templates, CollectionView, OverlapView) {
        'use strict';
        var OverlapGraphView = CollectionView.extend({

            initialize: function(){
                CollectionView.prototype.initialize.apply(this, arguments);
            },

            //TODO reduce boilerplate somehow
            render: function(){
                this.ui = {
                    container: this.$el.find('tbody')
                };
                this.removeChildViews();
                this.childViews = this.collection.map(function(overlap){
                    return new OverlapView({
                        model: overlap
                    });
                });
                this.renderChildViews();
            }

        });

        return OverlapGraphView;
    });