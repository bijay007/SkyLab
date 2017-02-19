# Angular Style Guide Notes

## 1. Single Responsibility

#### Rule of 1

* Define 1 component per file, recommended to be less than 400 lines of code.

```
angular
    .module('app', ['ngRoute']);
```

```
angular
    .module('app')
    .controller('SomeController', SomeController);

function SomeController() { }
```

```
angular
    .module('app')
    .factory('someFactory', someFactory);

function someFactory() { }
```

#### Small Functions

* Define small functions, no more than 75 LOC (less is better).

## IIFE

* Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

```
// logger.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    function logger() { }
})();

// storage.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage);

    function storage() { }
})();
```

## Modules

#### Avoid Naming Collisions

* Use unique naming conventions with separators for sub-modules.

*Why?: Unique names help avoid module name collisions. Separators help define modules and their submodule hierarchy. For example app may be your root module while app.dashboard and app.users may be modules that are used as dependencies of app.*

#### Definitions (aka Setters)

* Declare modules without a variable using the setter syntax.

*Why?: With 1 component per file, there is rarely a need to introduce a variable for the module.*

```
/* avoid */
var app = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'app.shared',
    'app.dashboard'
]);

/* recommended */
angular
    .module('app', [
        'ngAnimate',
        'ngRoute',
        'app.shared',
        'app.dashboard'
    ]);
```

#### Getters

* When using a module, avoid using a variable and instead use chaining with the getter syntax.

```
/* avoid */
var app = angular.module('app');
app.controller('SomeController', SomeController);

function SomeController() { }

/* recommended */
angular
    .module('app')
    .controller('SomeController', SomeController);

function SomeController() { }
```

#### Setting vs Getting

* Only set once and get for all other instances.

*Why?: A module should only be created once, then retrieved from that point and after.*

```
/* recommended */

// to set a module
angular.module('app', []);

// to get a module
angular.module('app');
```

#### Named vs Anonymous Functions

*Use named functions instead of passing an anonymous function in as a callback.*

```
/* avoid */
angular
    .module('app')
    .controller('DashboardController', function() { })
    .factory('logger', function() { });

/* recommended */

// dashboard.js
angular
    .module('app')
    .controller('DashboardController', DashboardController);

function DashboardController() { }
```

## Controllers

#### controllerAs View Syntax

* Use the controllerAs syntax over the classic controller with $scope syntax

```
<!-- avoid -->
<div ng-controller="CustomerController">
    {{ name }}
</div>

<!-- recommended -->
<div ng-controller="CustomerController as customer">
    {{ customer.name }}
</div>
```

#### controllerAs Controller Syntax

* The controllerAs syntax uses this inside controllers which gets bound to $scope

*Why?: controllerAs is syntactic sugar over $scope. You can still bind to the View and still access $scope methods.*

*Why?: Helps avoid the temptation of using $scope methods inside a controller when it may otherwise be better to avoid them or move the method to a factory, and reference them from the controller. Consider using $scope in a controller only when needed.*

```
/* avoid */
function CustomerController($scope) {
    $scope.name = {};
    $scope.sendMessage = function() { };
}
```

```
/* recommended - but see next section */
function CustomerController() {
    this.name = {};
    this.sendMessage = function() { };
}
```

#### controllerAs with vm

* Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, which stands for ViewModel.

*Why?: The this keyword is contextual and when used within a function inside a controller may change its context. Capturing the context of this avoids encountering this problem.*

```
/* avoid */
function CustomerController() {
    this.name = {};
    this.sendMessage = function() { };
}
```

```
/* recommended */
function CustomerController() {
    var vm = this;
    vm.name = {};
    vm.sendMessage = function() { };
}
```

* Note: When working with larger codebases, using a more descriptive name can help ease cognitive overhead & searchability. Avoid overly verbose names that are cumbersome to type.

```
<!-- avoid -->
<input ng-model="customerProductItemVm.title">

<!-- recommended -->
<input ng-model="productVm.title">
```

#### Bindable Members Up Top

```
/* avoid */
function SessionsController() {
    var vm = this;

    vm.gotoSession = function() {
      /* ... */
    };
    vm.refresh = function() {
      /* ... */
    };
    vm.search = function() {
      /* ... */
    };
    vm.sessions = [];
    vm.title = 'Sessions';
}
```

```
/* recommended */
function SessionsController() {
    var vm = this;

    vm.gotoSession = gotoSession;
    vm.refresh = refresh;
    vm.search = search;
    vm.sessions = [];
    vm.title = 'Sessions';

    ////////////

    function gotoSession() {
      /* */
    }

    function refresh() {
      /* */
    }

    function search() {
      /* */
    }
}
```

#### Defer Controller Logic to Services

* Defer logic in a controller by delegating to services and factories.

*Why?: Logic may be reused by multiple controllers when placed within a service and exposed via a function.*

*Why?: Logic in a service can more easily be isolated in a unit test, while the calling logic in the controller can be easily mocked.*

*Why?: Removes dependencies and hides implementation details from the controller.*

*Why?: Keeps the controller slim, trim, and focused.*

```
/* avoid */
function OrderController($https, $q, config, userInfo) {
    var vm = this;
    vm.checkCredit = checkCredit;
    vm.isCreditOk;
    vm.total = 0;

    function checkCredit() {
        var settings = {};
        // Get the credit service base URL from config
        // Set credit service required headers
        // Prepare URL query string or data object with request data
        // Add user-identifying info so service gets the right credit limit for this user.
        // Use JSONP for this browser if it doesn't support CORS
        return $https.get(settings)
            .then(function(data) {
             // Unpack JSON data in the response object
               // to find maxRemainingAmount
               vm.isCreditOk = vm.total <= maxRemainingAmount
            })
            .catch(function(error) {
               // Interpret error
               // Cope w/ timeout? retry? try alternate service?
               // Re-reject with appropriate error for a user to see
            });
    };
}
```

```
/* recommended */
function OrderController(creditService) {
    var vm = this;
    vm.checkCredit = checkCredit;
    vm.isCreditOk;
    vm.total = 0;

    function checkCredit() {
       return creditService.isOrderTotalOk(vm.total)
          .then(function(isOk) { vm.isCreditOk = isOk; })
          .catch(showError);
    };
}
```

#### Assigning Controllers

* When a controller must be paired with a view and either component may be re-used by other controllers or views, define controllers along with their routes.

**Note: If a View is loaded via another means besides a route, then use the ng-controller="Avengers as vm" syntax.**

*Why?: Pairing the controller in the route allows different routes to invoke different pairs of controllers and views. When controllers are assigned in the view using ng-controller, that view is always associated with the same controller.*

```
/* avoid - when using with a route and dynamic pairing is desired */

// route-config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/avengers', {
          templateUrl: 'avengers.html'
        });
}
<!-- avengers.html -->
<div ng-controller="AvengersController as vm">
</div>
```

```
/* recommended */

// route-config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/avengers', {
            templateUrl: 'avengers.html',
            controller: 'Avengers',
            controllerAs: 'vm'
        });
}
<!-- avengers.html -->
<div>
</div>
```

## Factories

#### Single Responsibility

* Factories should have a single responsibility, that is encapsulated by its context. Once a factory begins to exceed that singular purpose, a new factory should be created.

#### Singletons

* Factories are singletons and return an object that contains the members of the service.

#### Accessible Members Up Top

* Expose the callable members of the service (its interface) at the top, using a technique derived from the Revealing Module Pattern.

*Why?: Placing the callable members at the top makes it easy to read and helps you instantly identify which members of the service can be called and must be unit tested (and/or mocked).*

*Why?: This is especially helpful when the file gets longer as it helps avoid the need to scroll to see what is exposed.*

```
/* avoid */
function dataService() {
  var someValue = '';
  function save() {
    /* */
  };
  function validate() {
    /* */
  };

  return {
      save: save,
      someValue: someValue,
      validate: validate
  };
}
```

```
/* recommended */
function dataService() {
    var someValue = '';
    var service = {
        save: save,
        someValue: someValue,
        validate: validate
    };
    return service;

    ////////////

    function save() {
        /* */
    };

    function validate() {
        /* */
    };
}
```

## Directives

#### Limit 1 Per File

* Create one directive per file. Name the file for the directive.

*Why?: It is easy to mash all the directives in one file, but difficult to then break those out so some are shared across apps, some across modules, some just for one module.*

*Why?: One directive per file is easy to maintain.*

```
/* recommended */
/* calendar-range.directive.js */

/**
* @desc order directive that is specific to the order module at a company named Acme
* @example <div acme-order-calendar-range></div>
*/
angular
    .module('sales.order')
    .directive('acmeOrderCalendarRange', orderCalendarRange);

function orderCalendarRange() {
    /* implementation details */
}
```

## Naming

#### Naming Guidelines

* Use consistent names for all components following a pattern that describes the component's feature then (optionally) its type. My recommended pattern is feature.type.js. There are 2 names for most assets:

    - the file name (avengers.controller.js)
    - the registered component name with Angular (AvengersController)

*Why?: Naming conventions help provide a consistent way to find content at a glance. Consistency within the project is vital. Consistency with a team is important. Consistency across a company provides tremendous efficiency.*

*Why?: The naming conventions should simply help you find your code faster and make it easier to understand.*

#### Feature File Names

* Use consistent names for all components following a pattern that describes the component's feature then (optionally) its type. My recommended pattern is feature.type.js.

```
/**
 * recommended
 */

// controllers
avengers.controller.js
avengers.controller.spec.js

// services/factories
logger.service.js
logger.service.spec.js

// constants
constants.js

// module definition
avengers.module.js

// routes
avengers.routes.js
avengers.routes.spec.js

// configuration
avengers.config.js

// directives
avenger-profile.directive.js
avenger-profile.directive.spec.js
```

#### Controller Names

* Use consistent names for all controllers named after their feature. Use UpperCamelCase for controllers, as they are constructors.

```
/**
 * recommended
 */

// avengers.controller.js
angular
    .module
    .controller('HeroAvengersController', HeroAvengersController);

function HeroAvengersController() { }
```

#### Factory and Service Names

* Use consistent names for all factories and services named after their feature. Use camel-casing for services and factories. Avoid prefixing factories and services with $. Only suffix service and factories with Service when it is not clear what they are (i.e. when they are nouns).

*Why?: Provides a consistent way to quickly identify and reference factories.*

*Why?: Avoids name collisions with built-in factories and services that use the $ prefix.*

*Why?: Clear service names such as logger do not require a suffix.*

*Why?: Service names such as avengers are nouns and require a suffix and should be named avengersService.*


