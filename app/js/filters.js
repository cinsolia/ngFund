'use strict';

eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return 'Half Hour';
            case 2:
                return '1 Hour';
            case 3:
                return '2 Hours';
            case 4:
                return 'Half Day';
        }
    }
});

eventsApp.filter('levelDescriptions', function () {
    return function (level) {
        switch (level) {
            case 1:
                return 'Introductory';
            case 2:
                return 'Intermediate';
            case 3:
                return 'Advanced';
        }
    }
});

eventsApp.filter('levelIcons', function () {
    return function (level) {
        switch (level) {
            case 1:
                return 'icon-volume-down';
            case 2:
                return 'icon-volume-up';
            case 3:
                return 'icon-headphones';
        }
    }
});
