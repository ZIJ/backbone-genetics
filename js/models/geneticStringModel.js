define(['underscore', 'backbone'],
    function(_, Backbone){
        'use strict';
        var GeneticStringModel = Backbone.Model.extend({
            initialize: function(){
                //memoized prefix / suffix functions should belong to instances rather than prototype
                this._prefixMemo = _.memoize(this._prefix);
                this._suffixMemo = _.memoize(this._suffix);
            },

            _prefix: function(size){
                var sequence = this.get('sequence');
                return sequence.slice(0, size);
            },

            _suffix: function(size){
                var sequence = this.get('sequence');
                return sequence.slice(sequence.length - size);
            },

            prefix: function(size){
                return this._prefixMemo(size);
            },

            suffix: function(size){
                return this._suffixMemo(size);
            }
        });
        return GeneticStringModel;
    });