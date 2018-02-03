Template.chat.onCreated(function() {
    this.id = () => FlowRouter.getParam("id");
    this.subscribe("chat", this.id());
});

Template.chat.helpers({
    message: function() {
        return Conversations.findOne(({ game: Template.instance().id() }).messages);
    },
    getClass: function (name) {
        if (name == "system") return "system";
        if (name === Meteor.user().username) return "me";
        return "them";
    }
})