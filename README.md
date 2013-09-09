backbone-genetics
=================
#####Live demo: [zij.github.io/backbone-genetics](http://zij.github.io/backbone-genetics)

An application demonstrating simple MV* architecture on top of Backbone.js framework as well as one of basic algorithms in bioinformatics - [overlap graph](http://rosalind.info/problems/grph) generation.

#### Solution stack:
  - [Backbone](http://backbonejs.org) as core MV* framework
  - [Lodash](http://lodash.com) instead of [Underscore](underscorejs.org) for better performance and cross-browser consistency
  - [jQuery](http://jquery.com) for DOM manipulation in views
  - [HTML5 Boilerplate](html5boilerplate.com) for initial page structure and common CSS rules
  - [Bower](http://bower.io) for bootstrapping 3rd-party dependencies
  - [Require.js](http://requirejs.org/) for dependency management and modular app structure

#### Bonus features:
  - Dynamic overlap graph generation
  - DNA / RNA / peptide strings validation
  - Centralized configuration
  - Lazy templates precompilation
  - Memoized suffix and prefix extraction

#### What's missing:
  - Build management. For any production app using [Grunt](http://gruntjs.com) makes linting, build targeting and automation a breeze
  - Unit tests. A larger-scale application cannot be called robust without at least critical test coverage.

