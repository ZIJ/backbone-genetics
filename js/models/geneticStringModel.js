define(['underscore', 'backbone'],
    function(_, Backbone){
        'use strict';
        var GeneticStringModel = Backbone.Model.extend({
            defaults: {
                alphabet: 'ACGT'    //ACGU for RNA strings
            },
            initialize: function(){
                //memoized prefix / suffix functions should belong to instances rather than prototype
                this._prefixMemo = _.memoize(this._prefix);
                this._suffixMemo = _.memoize(this._suffix);
                this._alphabetRegex = new RegExp('^[' + this.get('alphabet') + ']+$', 'i');
            },

            validate: function(attributes){
                if (!attributes.name){
                    return 'Name cannot be empty';
                }
                if (!this._alphabetRegex.test(attributes.sequence)){
                    return 'Sequence has characters other than ' + this.get('alphabet') + ' or is empty';
                }
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