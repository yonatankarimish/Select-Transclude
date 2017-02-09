angular.module('app', []);

angular.module('app').directive('formEntry', function(){
    return{
        bindToController:{
            labelText: '@'
        },
        controller: function(){},
        controllerAs: 'entryCtrl',
        link: function(scope, element, attr, entryCtrl){
            var label = angular.element("<label>"+entryCtrl.labelText+"</label>");
            label.insertBefore(element);
        },
        restrict: 'A',
        scope: true,
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



