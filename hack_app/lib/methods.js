import { Hackathons } from '/imports/api/collections.js';

Meteor.methods({
	setFriend: function (userId) {
		let query = {};

		query[ alreadyFriends(userId) ? '$pull' : '$push' ] = {
			'profile.friends': userId
		};

		Meteor.users.update(this.userId, query);
	},
	addPost: function(hackId, isGroup, members, description, skillsNeeded) {
        Hackathons.update(hackId,
            {
                $push: {posts: {author: Meteor.user()._id, isGroup: isGroup, members: members, description: description, skillsNeeded: skillsNeeded}}
            }
        )
	}
});