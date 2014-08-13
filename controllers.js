angular.module('controllers', ['forceng'])

    .controller('NavbarCtrl', function ($scope, force) {

        $scope.login = function () {
            force.login().then(
                function () {
                    console.log('Salesforce login succeeded');
                },
                function () {
                    alert('Salesforce login failed');
                });
        };

        $scope.discardToken = function () {
            force.discardToken();
            alert("Token discarded");
        };

        $scope.isLoggedIn = function () {
            alert(force.isLoggedIn());
        };

    })

    .controller('ContactCtrl', function ($scope, force) {

        $scope.newContact = function() {
            $scope.contact = {FirstName:'', LastName:''};
        };

        $scope.query = function () {
            force.query('select id, firstName, lastName from contact limit 50').then(
                function (contacts) {
                    $scope.contacts = contacts.records;
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.create = function () {
            force.create('contact', $scope.contact).then(
                function (response) {
                    console.log(response);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.update = function () {
            force.update('contact', $scope.contact).then(
                function (response) {
                    console.log(response);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.del = function () {
            force.del('contact', $scope.contact.Id).then(
                function (response) {
                    console.log(response);
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

        $scope.retrieve = function (id) {
            force.retrieve('contact', id, 'id,firstName,lastName').then(
                function (contact) {
                    $scope.contact = contact;
                },
                function() {
                    alert("An error has occurred. See console for details.");
                });
        };

    });
