Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/:userSlug', {
	name: 'userPage', 
	template: 'home'
});

Router.onBeforeAction('loading');