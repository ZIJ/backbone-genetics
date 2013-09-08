define(['underscore', 'backbone', 'jquery', 'templates', 'views/collectionView', 'views/geneticStringView'],
    function (_, Backbone, $, templates, CollectionView, GeneticStringView) {
        'use strict';
         var GeneticStringListView = CollectionView.extend({

             initialize: function(){
                 CollectionView.prototype.initialize.apply(this, arguments);
             },

             //TODO reduce boilerplate somehow
             render: function(){
                 this.ui = {
                     container: this.$el.find('tbody')
                 };
                 this.removeChildViews();
                 this.childViews = this.collection.map(function(geneticString){
                    return new GeneticStringView({
                        model: geneticString
                    });
                 });
                 this.renderChildViews();
             }

          });

        return GeneticStringListView;
    });