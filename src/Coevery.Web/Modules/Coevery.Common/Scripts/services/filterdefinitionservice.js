﻿'use strict';

define(['core/app/detourService'], function (detour) {
    detour.registerFactory([
       'filterDefinitionService',
       ['$rootScope', '$resource', function ($rootScope, $resource) {
           return $resource(applicationBaseUrl+'api/Projections/Filter/:contentType',
               { contentType: '@contentType' },
               { update: { method: 'PUT' } });
       }]
    ]);
});