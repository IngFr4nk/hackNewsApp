(function() {
    'use strict';    
    angular
        .module('appNews')    
        .controller('controlador', controlador);
        
    function controlador($http, apiGet) {
        var vm = this;
        vm.posts = [];
        vm.nodeData = [];

        apiGet.getPosts().then(function(data) {
            vm.postsId = data.data;
             
             _(vm.postsId).forEach(function(value) {                 
                 vm.posts.push("https://hacker-news.firebaseio.com/v0/item/"+value+".json?print=pretty")                
             });
             var count = 0;
             _(vm.posts).forEach(function(url) {               
                if(count <= 199){
                    apiGet.getUrlData(url).then(function(data){
                        vm.nodeData.push({id:_.uniqueId() ,url: data.data.url, title:data.data.title, author: data.data.by, type: data.data.type, time: data.data.time});                                          
                    });
                    count += 1;                
                }
                 
             });             
        });        
    }

})();