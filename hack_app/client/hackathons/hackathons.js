import { Hackathons } from '/imports/api/collections.js';

Template.hackathons.onCreated(function () {
    this.SelectedFilter = new ReactiveVar(0);
    this.subscribe('users');
    this.subscribe('hackathons');
})

Template.hackathons.helpers({
    selectedFilter() {
        return Template.instance().SelectedFilter.get();
    },
    upcomingHackathons() {
        return Hackathons.find({ archived: null }, {sort: {startDate: -1}})
    },
    archivedHackathons() {
        return Hackathons.find({ archived: { $not: null } });
    }
});

Template.hackathons.events({
    'click .listFilter'(event, template) {
        $('.listFilter').removeClass("selected");
        $(event.target).addClass("selected");
        template.SelectedFilter.set(Number($(event.target).attr('id')));
    },
    'submit form': function(event) {
        event.preventDefault();
        Meteor.call('createHackathon');
    },
    'click #accept': function(event) {
        Meteor.call('acceptGame', this._id);
    },
    'click #decline': function(event) {
        Meteor.call('declineGame', this._id);
    }
});
