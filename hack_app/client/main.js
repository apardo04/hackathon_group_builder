import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/accounts-config.js';

Session.set("like", "<img id='like' src='images/extras/like.gif'/>");

Template.registerHelper('equals',
    function(v1, v2) {
        return (v1 === v2);
    }
);
