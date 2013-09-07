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

require(['underscore', 'backbone', 'jquery', 'models/appModel', 'views/appView'],
	function(_, Backbone, $, AppModel, AppView){
		var app =  new AppView({
            model: new AppModel(),
            el: 'body'
        });
        app.render();
        console.log('app initialized');
        return app;
	});
