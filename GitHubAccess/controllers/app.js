(function() {
    'use strict';

    angular
        .module('gitDataAccess', [])
        .controller('MainController', MainController)

    MainController.$inject = ['$scope','$http'];

    function MainController($scope,$http) {
        var mainCtrl = this;
        mainCtrl.username = "dhirajsharma";
        mainCtrl.accesstoken = "3853a9ede2a60b012d156d3097a662d4ff83306b";
        mainCtrl.gitUrl = "https://api.github.com";
        mainCtrl.isvalid = "false";
        mainCtrl.isInitial = "true"
        var isValid = "false";
        mainCtrl.isRepo = false;

        mainCtrl.loadGitData = function() {
            mainCtrl.userNotFound = false;
            mainCtrl.loaded = false;
            var url = mainCtrl.gitUrl + "/users/" + mainCtrl.username;
            console.log(url);
            
            $http.get(url).success(function(data){
                if(data.name == "") data.name = data.login;
                mainCtrl.user = data;
                console.log(mainCtrl.user.login);
                mainCtrl.loaded = true;
                mainCtrl.isRepo = true;
            }).error(function(){
                mainCtrl.userNotFound = true;
            });
            
            $http.get(url+"/repos").success(function(data){
                console.log(data);
                mainCtrl.repos = data;
               mainCtrl.reposFound = data.length > 0;
               mainCtrl.isRepo = true;
            });
        }
    }
})();
