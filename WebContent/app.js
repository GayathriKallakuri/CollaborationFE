var app = angular.module("myApp",["ngRoute","ngCookies"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "c_home/home.html",
		controller : "HomeController"
	})
	
	.when("/register",{
templateUrl : "c_user/register.html",
controller : "UserController"
})

.when("/login",{
templateUrl : "c_user/login.html",
controller : "UserController"
})

.when("/myprofile",{
templateUrl : "c_user/myprofile.html",
controller : "UserController"
})

.when("/listBlog",{
	templateUrl:"c_blog/listBlog.html",
	controller:"BlogController"
})

.when("/createBlog",{
	templateUrl:"c_blog/createBlog.html",
	controller:"BlogController"
})

.when("/viewBlog",{
	templateUrl:"c_blog/viewBlog.html",
	controller:"BlogController"
})

.when("/getJobDetails",{
	templateUrl : "c_job/getJobDetails.html",
	controller : "JobController"
})

.when("/search_job",{
	templateUrl : "c_job/searchjob.html",
	controller : "JobController"
})

.when("/view_applied_jobs",{
	templateUrl : "c_job/viewAllJobs.html",
	controller : "JobController"
})

.when("/viewAppliedJobs",{
	templateUrl : "c_job/viewAppliedJobs.html",
	controller : "JobController"
})

.when('/post_job',{
	templateUrl : 'c_job/postjob.html',
		controller : 'JobController'	
})

.when('/adminHome',{
	templateUrl : 'c_admin/adminHome.html'
})

.when('/manage_job',{
	templateUrl : 'c_admin/admin_manage_job.html'
})

.when('/searchFriend',{
	templateUrl : 'c_friend/searchFriend.html',
		controller : 'FriendController'	
})

.when('/viewFriend',{
	templateUrl : 'c_friend/viewFriend.html',
		controller : 'FriendController'	
})

.when('/manageFriends',{
	templateUrl : 'c_friend/manageFriends.html',
		controller : 'FriendController'	
})

.when('/myFriends',{
	templateUrl : 'c_friend/myFriends.html',
		controller : 'FriendController'	
})
});