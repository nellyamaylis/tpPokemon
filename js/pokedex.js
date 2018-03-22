
var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.controller('firstcontroller', function($scope, $log, $http) {
    $scope.poks = [
    ];

    $scope.maFonction=function (x) {
        $log.warn(x.name);
    };
    $http({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/'
    }).then(function successCallback(response) {
       console.log(response.data);
        $scope.poks = response.data.results;
        $scope.poks.forEach(function(e){
          e.id = e.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
        });
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});


// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.factory('chosenPokemon', function($resource,$log,$rootScope){
    var pokemon = {};
    var description = {};

    function retrouve(url){
       var ApiData = $resource(url);
       ApiData.get().$promise.then(function(result){
           pokemon = result;
           var ApiDescription = $resource(result.species.url);
           ApiDescription.get().$promise.then(function(result){
               var description = result.flavor_text_entries.find(function(m){
                   return m.language.name === "fr";
               });
               pokemon.description = description.flavor_text;
           });
       });
    }

    function getPokemon(){
        return pokemon;
    }

    return {retrouve: retrouve, getPokemon: getPokemon}
});

pokeApp.controller('pokeList', function($scope, $resource, POKEAPI, chosenPokemon) {
    var ApiData = $resource(POKEAPI + "pokemon/?limit=151");
    ApiData.get().$promise.then(function(results){
        $scope.pokemons = results.results;
    });
    $scope.iChooseYou = function(selectedPoke) {
        chosenPokemon.retrouve(selectedPoke)
    };
});

pokeApp.controller('pokeChoice', function($scope, chosenPokemon) {
    $scope.$watch(function(){
            return chosenPokemon.getPokemon()
        }
        ,function (newVal){
            $scope.pokemon = newVal;
        });
});

pokeApp.directive('pokedex', function() {
    return {
        templateUrl: 'pokedex.html'
    };
});

pokeApp.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
