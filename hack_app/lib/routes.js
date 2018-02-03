FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('home');
	}
});

FlowRouter.route('/users', {
	name: 'users',
	action() {
		BlazeLayout.render('home', {main: 'users'});
	}
});

FlowRouter.route('/hackathons', {
    name: 'hackathons',
    action() {
        BlazeLayout.render('home', {main: 'hackathons'});
    }
});

FlowRouter.route('/hackathons/:_id', {
	name: 'hackathon',
	action: function(params) {
        BlazeLayout.render('home', {main: 'hackathon'});
	}
});