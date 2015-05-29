Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/:username', {
	name: 'userPage', 
	template: 'home'
});

Router.onBeforeAction('loading');