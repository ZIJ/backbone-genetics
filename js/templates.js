define(['underscore', 'jquery'],
    function (_, $) {
        var jst = {};

        return {
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