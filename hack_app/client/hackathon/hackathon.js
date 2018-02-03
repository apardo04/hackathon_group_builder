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
    },
    messages: [
        { text: 'Hello,' },
        { text: 'Nice to meet you!' },
        { text: '<3' },
    ],
});

Template.hackathon.events({
    'click .listFilter'(event, template) {
        $('.listFilter').removeClass("selected");
        $(event.target).addClass("selected");
        template.SelectedFilter.set(Number($(event.target).attr('id')));
    }
});