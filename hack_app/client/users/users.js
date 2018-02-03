Template.users.onCreated(function () {
	this.subscribe('users', Session.get('username'));
	this.SelectedFilter = new ReactiveVar(0);
});

Template.users.helpers({
	users() {
		return Meteor.users.find({ username: { $not: (Meteor.user() || {}).username } });
	},
	selectedFilter() {
		return Template.instance().SelectedFilter.get();
	},
	alreadyFriends: alreadyFriends
})

Template.users.events({
	'click .listFilter'(event, template) {
		$('.listFilter').removeClass("selected");
		$(event.target).addClass("selected");
		template.SelectedFilter.set(Number($(event.target).attr('id')));
	}
});

Template.user.helpers({
	alreadyFriends: alreadyFriends
});

Template.user.events({
	'click .add' (event) {
		Meteor.call('setFriend', this._id);
	}
});
