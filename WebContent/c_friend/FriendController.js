'use strict';

app
		.controller(
				'FriendController',
				[
						'UserService',
						'$scope',
						'FriendService',
						'$location',
						'$rootScope',
						function(UserService, $scope, FriendService, $location,
								$rootScope) {
							console.log("Friend Controller....")

							var self = this;
							self.friend = {
								id : '',
								userID : '',
								friendID : '',
								status : '',
								isOnline : '',
								errorMessage : '',
								errorCode : ''
							};

							self.friends = [];

							self.user = {
								id : '',
								name : '',
								email : '',
								password : '',
								address : '',
								contact : '',
								isOnline : '',
								role : '',
								errorMessage : '',
								errorCode : ''
							};

							self.users = [];

							self.myfriend = {
								id : '',
								userID : '',
								friendID : '',
								status : '',
								isOnline : '',
								errorMessage : '',
								errorCode : ''
							};
							self.myfriends = [];

							self.getMyFriends = function() {
								console.log('Getting my friends...')
								FriendService
										.getMyFriends()
										.then(
												function(d) {
													self.myfriends = d;
												},
												function(errResponse) {
													console
															.error('Error while getting my friends....')
												});
							};
							self.getMyFriends();

							self.getMyFriendRequests = function() {
								FriendService
										.getMyFriendRequests()
										.then(
												function(d) {
													self.friends = d;
													$location.path = "/viewFriendRequest";
												},
												function(errResponse) {
													console
															.error('Error while getting requests...');
												});
							};

							self.getRequestsSentByMe = function() {
								FriendService
										.getRequestsSentByMe()
										.then(
												function(d) {
													self.friends = d;
												},
												function(errResponse) {
													console
															.error('Error while getting requests sent by you...');
												});
							};

							self.sendFriendRequest = sendFriendRequest
							function sendFriendRequest(friendID) {
								console
										.log("->sendFriendRequest : "
												+ friendID)
								FriendService
										.sendFriendRequest(friendID)
										.then(
												function(d) {
													self.friend = d;
													alert("FriendRequest :"
															+ self.friend.errorMessage)
												},
												function(errresponse) {
													console
															.error('Error while sending friend request');
												});
							}
							;

							self.acceptFriendRequest = function(id) {
								FriendService
										.acceptFriendRequest(id)
										.then(
												self.fetchAllFriends,
												function(errResponse) {
													console
															.error('Error while accepting friend request...')
												});
							};

							self.rejectFriendRequest = function(id) {
								FriendService
										.rejectFriendRequest(id)
										.then(
												self.fetchAllFriends,
												function(errResponse) {
													console
															.error('Error while rejecting friend request...')
												});
							};

							self.unFriend = function(id) {
								FriendService
										.unFriend(id)
										.then(
												self.fetchAllFriends,
												function(errResponse) {
													console
															.error('Error while unfriending friend request...')
												});
							};

							self.fetchAllUsers = function() {
								UserService
										.fetchAllUsers()
										.then(
												function(d) {
													self.users = d;
												},
												function(errresponse) {
													console
															.error('Error while fetching users');
												});
							};

							self.fetchAllUsers();

							self.deleteFriend = function(id) {
								FriendService
										.deleteFriend(id)
										.then(
												self.fetchAllFriends,
												function(errResponse) {
													console
															.error('Error while deleting friend');
												});
							};

							self.updateFriendRequest = function(friend, id) {
								FriendService
										.updateFriendRequest(friend, id)
										.then(
												self.fetchAllFriends,
												function(errResponse) {
													console
															.error('Error while updating friend');
												});
							};

						} ]);