var app = angular.module('task4',[]);
app.controller('mainController', function($scope){
  $scope.data = localStorage.getItem('msg');

  $scope.send = function(text){
    var expr = /query/;
    console.log(text.match(expr));
    if(text.match(expr)){
      $scope.data = 'You can not enter messages containing word' + expr;
    }else{
      $scope.date = new Date();
      $scope.data = text + " " + $scope.date;
      localStorage.setItem('msg', $scope.data);
    }
  }
});
