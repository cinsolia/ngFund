'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravitarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function (email) {
            return gravitarUrlBuilder.buildGravitarUrl(email);
        }

    }
);
