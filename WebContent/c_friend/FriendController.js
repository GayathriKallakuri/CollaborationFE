'use strict';
app
		.controller(
				'FriendController',
				[
						'UserService',
						'$scope',
						'FriendService',
						'$location',
						'$routeParams',
						'$rootScope',
						function(UserService, $scope, FriendService, $location,
								$routeParams, $rootScope) {
							console.log("FriendController....")
							var self = this;

							self.friend = {
								id : '',
								userID : '',
								friendID : '',
								status : ''
							};

							self.friends = [];
							

							self.user = {
								id : '',
								name : '',
								password : '',
								email : '',
								contact : '',
								address : '',
								status : '',
								isOnline : '',
								role : '',
								errorCode : '',
								errorMessage : ''
							};

							self.users = [];
							
							self.myfriend = {
									id : '',
									userID : '',
									friendID : '',
									status : ''
								};

								self.myfriends = [];
							

							self.getMyFriendRequests  = function() {
								FriendService.getMyFriendRequests
										.then(
												function(d) {
													self.myfriends = d;
												},
												function(errResponse) {
													console
															.error('Error while getting friend requests')
												});
							};

							self.sendFriendRequest = sendFriendRequest
							function sendFriendRequest(friendID) {
								console.log("send friendRequest:" + friendID)
								FriendService
										.sendFriendRequest(friendID)
										.then(
												function(d) {
													self.friend = d;
													alert("friend request sent")
												},
												function(errResponse) {
													console
															.error('Error while sending friend request');
												});
							}
							;

							self.getMyFriends = function() {
								FriendService.getMyFriends
										.then(
												function(d) {
													self.friends = d;
												},
												function(errResponse) {
													console
															.error('Error while getting friends')
												});
							};

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
							
							self.fetchAllUsers();
						

						} ]);