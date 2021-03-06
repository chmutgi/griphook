(function() {
    'use strict';

    angular
        .module('griphookApp')
        .controller('TaskDetailController', TaskDetailController);

    TaskDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Task', 'Phase'];

    function TaskDetailController($scope, $rootScope, $stateParams, previousState, entity, Task, Phase) {
        var vm = this;

        vm.task = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('griphookApp:taskUpdate', function(event, result) {
            vm.task = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
