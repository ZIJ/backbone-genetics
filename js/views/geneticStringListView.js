define(['underscore', 'backbone', 'jquery', 'templates', 'views/geneticStringView'],
    function (_, Backbone, $, templates, GeneticStringView) {
        'use strict';
         var GeneticStringListView = Backbone.View.extend({

             initialize: function(){
                 this.childViews = [];
                 this.listenTo(this.collection, 'add', this.render.bind(this));
             },

             render: function(){
                 this.ui = {
                     tbody: this.$el.find('tbody')
                 };
                 this.removeChildViews();
                 this.childViews = this.collection.map(function(geneticString){
                    return new GeneticStringView({
                        model: geneticString
                    });
                 });
                 this.renderChildViews();
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
                     listView.ui.tbody.append(childView.el);
                 });
             }

          });

        return GeneticStringListView;
    });