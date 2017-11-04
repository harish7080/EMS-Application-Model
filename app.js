
var app = angular.module("SampleApplication", []);

app.controller("SampleController", ['$scope', function ($scope) {

    $scope.hrDetails = {
        "HrEntityMappingDetails":[]
    };

    $scope.selection = [];

    $scope.getEntityList = function () {
        $scope.EntityList = [
            { "id": "1", "name": "Hr" },
            { "id": "2", "name": "Admin" },
            { "id": "3", "name": "It" },
            { "id": "4", "name": "Accountant" },
        ]
        $scope.serverData = angular.copy($scope.EntityList);
    }

    $scope.getEntityList();

    $scope.toggleSelection = function (id) {
        var index = $scope.selection.indexOf(id);
        if (index > -1) {
            $scope.selection.splice(index, 1);
        }
        else {
            $scope.selection.push(id);
        }
        assignValues();
        //$scope.hrDetails.HrEntityMappingDetails = angular.copy($scope.selection);
    }

    function assignValues() {
        $scope.hrDetails.HrEntityMappingDetails = [];
        angular.forEach($scope.selection, function (val, key) {
            $scope.hrDetails.HrEntityMappingDetails.push({ "EntityId": val });
        })
    }

    //function findWithAttr(array, attr, value) {
    //    for (var i = 0; i < array.length; i += 1) {
    //        if (array[i][attr] === value) {
    //            return i;
    //        }
    //    }
    //    return -1;
    //}
    //var Data = [
    //    { id_list: 2, name: 'John', token: '123123' },
    //    { id_list: 1, name: 'Nick', token: '312312' }
    //];
    //findWithAttr(Data, 'name', 'John'); // returns 0
    //findWithAttr(Data, 'token', '312312'); // returns 1
    //findWithAttr(Data, 'id_list', '10'); // returns -1

}]);




