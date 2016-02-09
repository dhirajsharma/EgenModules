(function() {
    'use strict';

    angular
        .module('phoneNumFormatter', [])
        .controller('MainController', MainController)

    MainController.$inject = ['getCountryCode', 'validateNumber', 'numberFormatter', 'getCountryName'];

    function MainController(getCountryCode, validateNumber, numberFormatter, getCountryName) {
        var mainCtrl = this;
        mainCtrl.heading = "Phonenumber Formatting";
        mainCtrl.phonenumber = "";
        mainCtrl.formatted = "";
        mainCtrl.isvalid = "false";
        mainCtrl.isInitial = "true"
        var isValid = "false";

        mainCtrl.formatNumber = function() {

        if (mainCtrl.phonenumber && mainCtrl.phonenumber.length > 0) {
            mainCtrl.isInitial = false;
            var countryCode = "US";

            var currentCountryCode = getCountryCode.countryCode(mainCtrl.phonenumber);

            console.log("currentCountryCode : " + currentCountryCode);

            if (currentCountryCode && currentCountryCode != undefined && currentCountryCode != null && currentCountryCode.length > 0) {
                countryCode = currentCountryCode;
            }

  
            isValid = validateNumber.isValidNumber(mainCtrl.phonenumber, countryCode)
            console.log("isValid : "  + isValid);
            if (isValid) {
                mainCtrl.isvalid = true;
                mainCtrl.country = getCountryName.countryCodeToName(countryCode);
            } else {
                mainCtrl.isvalid = false;
                mainCtrl.country = "--";
            }
            
            mainCtrl.formatted = numberFormatter.format(countryCode, mainCtrl.phonenumber);
        }

    }
    }

})();
