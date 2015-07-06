Template.home.created = function() {
  var self = this;

  self.limit = new ReactiveVar;
  self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));
  
  Tracker.autorun(function() {
    Meteor.subscribe('images', self.limit.get());
  });
}

Template.home.rendered = function() {
  var self = this;
  // is triggered every time we scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      incrementLimit(self);
    }
  });
}

Template.home.helpers({
  'images': function() {
    return Images.find();
  }
});

var incrementLimit = function(templateInstance) {
  var newLimit = templateInstance.limit.get() + 
    parseInt(Meteor.settings.public.recordsPerPage);
  templateInstance.limit.set(newLimit);
}