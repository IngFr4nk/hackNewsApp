(function() {
    'use strict';    
    angular
        .module('appNews')    
        .factory('apiGet', apiGet);

        apiGet.$inject = ['$http'];
        
        function apiGet($http){
		return {
			getPosts: function() {								
				return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function(data) {
					return data;
				})
			},
			getUrlData:  function(param) {
				return $http.get(param).then(function(data) {
					return data;
				})
			}
		}
	}
})();