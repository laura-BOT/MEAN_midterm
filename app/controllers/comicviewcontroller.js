function PortfolioViewController( $scope, $routeParams){
	$scope.new_album = {};
	$scope.add_portfolio_error = "";
	$scope.load_error_text = "";

$scope.portfolios = [
	{name: '0001', 
	title: 'Blue Cherry MX', 
	date: '2013-09-01', 
	tagwords: 'mechanical keyboard, takka-tak, clickity-clack, computer,',
	imageurl: 'comics/SAcomic_0001a.jpg',
	imageurl: 'SAcomic_0001.jpg' },

	{name: '0002', 
	title: 'I like my sugar with tea', 
	date: '2014-04-15', 
	tagwords: 'sugar, computer, tea,',
	imageurl: 'images/drunkenPirate_thumb2.png' },


	{name: '0003', 
	title: 'Command + S', 
	date: '2014-04-15', 
	tagwords: 'light bulb, computer, work, freak out, save,',
	imageurl: 'images/drunkenPirate_thumb2.png' },

	{name: '0004', 
	title: 'The Fourth Comic', 
	date: '2012-10-01', 
	tagwords: 'this is a placeholder, also... make this work better, fix everything, nothing works,', 
	imageurl: 'images/drunkenPirate_thumb1.png' }
	];


$scope.portfolio_name = $routeParams.portfolio_name;

	var portfolios = { 
		"0001": [
		{ filename: "SAcomic_0001.jpg",
		title: 'Blue Cherry MX', 
		date: "2015/09/05",
		posttitle:'Mechanical Keyboards are LOUD',
		post: 'Proud owner of the MAX Keyboard Nighthawk X7, it is the loudest keyboard I have ever owned. ',
		tagwords: 'mechanical keyboard, takka-tak, clickity-clack, computer,', 
		
		},
				
		],


		"0002": [
		{ filename: "SAcomic_0002.jpg",
		title: 'I like my sugar with tea', 
		date: "2014/04/14",
		posttitle:'I eat sugar like its my job',
		post: 'does this work, I am surprised this site has not caught fire. I have lost so much sleep over this. ',
		tagwords: "sugar, computer, tea," },
		
		],

		"0003": [
		{ filename: "SAcomic_0003.jpg",
		title: 'Command + S', 
		date: "2014/04/14",
		
		tagwords: "light bulb, computer, work, freak out, save," },
		
		],


		"0004": [
		{ filename: "SAcomic_0004.jpg",
		title: 'The Fourth Comic', 
		date: "2012/10/01",
		tagwords: "this is a placeholder, also... make this work better, fix everything, nothing works," },
		
		]
	};

	if( portfolios[$scope.portfolio_name]){
		$scope.portfolios = portfolios[$scope.portfolio_name];
	} else {
		$scope.load_error_text = "That comic does not exist";
	}

}



comicApp.controller("PortfolioViewController", PortfolioViewController);

