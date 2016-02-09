(function() {
    'use strict';

    angular
        .module('phoneNumFormatter')
        .service('getCountryCode', getCountryCode)
        .service('validateNumber', validateNumber)
        .service('numberFormatter', numberFormatter)
        .service('getCountryName', getCountryName);


    getCountryCode.$inject = [];

    function getCountryCode() {
        var self = this;
        self.countryCode = function(phonenumber) {
            var currentCountryCode = countryForE164Number(phonenumber);
            return currentCountryCode;
        }
    }

    validateNumber.$inject = [];

    function validateNumber() {
        var self = this;
        self.isValidNumber = function(phonenumber, countryCode) {
            var isValid = isValidNumber(phonenumber, countryCode);
            return isValid;
        }
    }

    numberFormatter.$inject = [];

    function numberFormatter() {
        var self = this;
        self.format = function(countryCode, phonenumber) {
            var formattedString = formatInternational(countryCode, phonenumber);
            return formattedString;
        }
    }
    getCountryName.$inject = [];

    function getCountryName() {
        var self = this;
        self.countryCodeToName = function(countryCode) {
            var country = countryCodeToName(countryCode);
            return country;
        }
    }

})();
