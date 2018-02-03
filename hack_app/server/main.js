import { Meteor } from 'meteor/meteor';
import { Games } from '../imports/api/collections.js';
import { Hackathons } from '../imports/api/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
	Meteor.publish("users", function() {
		return Meteor.users.find({}, { fields: {username: 1 } });
	});
	Meteor.publish("hackathons", function() {
		return Hackathons.find({});
	});
	Meteor.publish("hackathon", function(hackathonId) {
		return Hackathons.find({ _id: hackathonId });
	});
	Meteor.publish("chat", function(hackathonId) {
		return Conversations.find({ hackathon: hackathonId})
	});
});
