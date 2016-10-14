<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="styles/vendor.1148a0ca.css"> 
	
	<link rel="stylesheet" href="styles/main.9430f033.css">
</head>
<body ng-app="jpApp">
    <div ng-include="'partials/_nav.html'"></div>

    <div class="container-fluid">
		<div ng-view=""></div>
    </div>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
    <script>
       !function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){
       (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),
       r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)
       }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

       ga('create', 'UA-XXXXX-X');
       ga('send', 'pageview');
    </script>
    <script src="scripts/vendor.eef533e0.js"></script>
	<script src="scripts/scripts.ac186e7b.js"></script> 
</body>
</html>
