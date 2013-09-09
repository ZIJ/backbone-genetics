backbone-genetics
=================
####Live demo: [zij.github.io/backbone-genetics](http://zij.github.io/backbone-genetics)

An application demonstrating simple MV* architecture on top of Backbone.js framework as well as one of basic algorithms in bioinformatics - [overlap graph](http://rosalind.info/problems/grph) generation.

#### Solution stack:
  - [Backbone](http://backbonejs.org) as core MV* framework
  - [Lodash](http://lodash.com) instead of [Underscore](http://underscorejs.org) for better performance and cross-browser consistency
  - [jQuery](http://jquery.com) for DOM manipulation in views
  - [HTML5 Boilerplate](http://html5boilerplate.com) for initial page structure and common CSS rules
  - [Bower](http://bower.io) for bootstrapping 3rd-party dependencies
  - [Require.js](http://requirejs.org/) for dependency management and modular app structure
  - [Twitter Bootstrap](http://getbootstrap.com/) for nice-looking UI

#### Bonus features:
  - Dynamic overlap graph generation
  - DNA / RNA / protein strings validation
  - Centralized configuration
  - Lazy templates precompilation
  - Memoized suffix and prefix extraction

#### What's missing:
  - Build management. [Grunt](http://gruntjs.com) makes linting, minifying and much more almost effortless.
  - CSS preprocessing. [SASS](http://sass-lang.com/), [Less](http://lesscss.org/) and [Stylus](http://learnboost.github.io/stylus/) are all great tools for that.
  - Full-featured template engine (Lodash templates are used for simplicity)
  - Unit tests

