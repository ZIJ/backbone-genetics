require.config({
    baseUrl: 'js',
    paths: {
        underscore: '../bower_components/lodash/lodash',
        backbone: '../bower_components/backbone/backbone',
        jquery: '../bower_components/jquery/jquery'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['underscore', 'backbone', 'jquery'],
	function(_, Backbone, $){
		console.log('app working');
	});
