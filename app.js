var app = angular.module('flapperNews', []);

app.factory('posts', [function() {
	var o = {
		posts: [{title: "hello", upvotes: 0}]
	};
	return o; 
}]);

app.controller('MainCtrl', [
	'$scope',
	'posts',
	 function($scope, posts){
	 	$scope.posts = posts.posts; 

	 

	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link, 
			upvotes: 0
		});

		$scope.title = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1; 
	};
}]);
