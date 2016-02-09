/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : Feb 9, 2016, 3:49:44 AM
 Author     : dhiraj
 */

(function () {

    var app = angular.module("validation", ["ngMessages"]);

    var RegistrationController = function () {
        var model = this;

        model.message = "";

        model.user = {
            username: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: "",
            birthday: ""
        };

        model.submit = function (isValid) {
            console.log("h");
            if (isValid) {
//          alert("Submitted");
                model.message = "Submitted ";
            } else {
                model.message = "There are still invalid fields below";
            }
        };

    };

    var compareTo = function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function () {
                    ngModel.$validate();
                });
            }
        };
    };

    app.directive("compareTo", compareTo);
    app.controller("RegistrationController", RegistrationController);

}());