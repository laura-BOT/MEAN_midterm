var comicApp = angular.module("comicApp", ["ngRoute"]);

comicApp.config(function($routeProvider){
	$routeProvider
	.when("/contact", {

		templateUrl: "app/partials/contact.html",
	})
	.when("/comic", {
		controller: "PortfolioViewController",
		templateUrl: "app/partials/comic/0001",
	})
	.when("/about", {

		templateUrl: "app/partials/about.html",
	})
	.when("/archive", {
		controller: "PortfolioViewController",
		templateUrl: "app/partials/archive.html"
	})
	



	

	.when("/comic/:portfolio_name", {
		controller: "PortfolioViewController",
		templateUrl: "app/partials/comic.html"
	})
	


	.when("/", { redirectTo: "/comic/0001",
	})
	.otherwise({redirectTo: "/comic/0001",
	});
});