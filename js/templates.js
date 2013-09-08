define(['underscore', 'jquery'],
    function (_, $) {
        'use strict';
        var jst = {};
        return {
            //returns precompiled template function or compiles it from node with corresponding data-template-name
            jst: function(name){
                if (jst.hasOwnProperty(name)) {
                    return jst[name]
                }
                var selector = '[data-template-name=' + name + ']';
                var source = $(selector);
                if (source.length < 1){
                    throw new Error('Template not found: ' + name);
                }
                var compiled = _.template(source.html());
                jst[name] = compiled;
                return compiled;
            }
        }
    });