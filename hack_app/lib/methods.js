import { Games } from '/imports/api/collections.js';
import { Hackathons } from '/imports/api/collections.js';

Meteor.methods({
	setFriend: function (userId) {
		let query = {};

		query[ alreadyFriends(userId) ? '$pull' : '$push' ] = {
			'profile.friends': userId
		};

		Meteor.users.update(this.userId, query);
	},
});
