(function (angular) {
    'use strict';

    angular.module('app', [
        'app.anonymous',
        'app.authenticated',
        'app.common',
        'app.core',
    ]);
})(window.angular);