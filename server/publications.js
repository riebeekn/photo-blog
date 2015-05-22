Meteor.publish('images', function(limit) {
  return Images.find({}, {
  	limit: limit
  });
});