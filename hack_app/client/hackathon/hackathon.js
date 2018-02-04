import { Hackathons } from '/imports/api/collections.js';

Template.hackathon.onCreated(function() {
    this.SelectedFilter = new ReactiveVar(0);
    this.subscribe('users');
    this.subscribe('hackathon', FlowRouter.getParam('_id'));
});

Template.hackathon.helpers({
    selectedFilter() {
        return Template.instance().SelectedFilter.get();
    },
    hackathon() {
        return Hackathons.find({});
    }
});

Template.hackathon.events({
    'click .listFilter'(event, template) {
        $('.listFilter').removeClass("selected");
        $(event.target).addClass("selected");
        template.SelectedFilter.set(Number($(event.target).attr('id')));
    },
    'click .add' (event, hackathon) {
        Meteor.call('addPost', FlowRouter.getParam('_id'), hackathon.find('#isGroup').value, hackathon.find('#members').value, hackathon.find('#description').value, hackathon.find('#skillsNeeded').value);
    }
});

