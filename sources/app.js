angular.module('app', []);

angular.module('app').directive('formEntry', function(){
    return{
        bindToController:{
            labelText: '@'
        },
        controller: function(){},
        controllerAs: 'entryCtrl',
        restrict: 'A',
        replace: true,
        scope: true,
        templateUrl: 'partials/form-entry.html',
        transclude: 'element'
    };
});

angular.module('app').controller('MainController', [function(){
    var ctrl = this;
    ctrl.people = [
        {id: 1, name: "Mahatma Gandhi"},
        {id: 2, name: "Winston Churchill"},
        {id: 3, name: "Franklin Roosevelt"},
        {id: 4, name: "Charles De Gaulle"},
    ];

    ctrl.inputModel = "";
    ctrl.selectModel = "";
}]);



