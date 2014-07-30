/**
 * @license Angulartics v0.15.20
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
(function(angular) {
    'use strict';

    /**
     * @ngdoc overview
     * @name angulartics.meituan.analytics
     * Enables analytics support for meituan Analytics (http://meituan.com/analytics)
     */
    angular.module('angulartics.meituan.analytics', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {

        $analyticsProvider.settings.trackRelativePath = true;

        $analyticsProvider.registerPageTrack(function (path) {
            if (window.mta) {
                var data = {};
                data[action] = 1;
                mta('count', 'pageview', data);
            }
        });

        /**
         * Track Event in mta
         * @name eventTrack
         *
         * @param {string} action Required 'action' (string) associated with the event
         * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
         */
        $analyticsProvider.registerEventTrack(function (action) {
            if (window.mta) {
                var data = {};
                data[action] = 1;
                mta('count', 'event', data);
            }
        });

    }]);
})(angular);
