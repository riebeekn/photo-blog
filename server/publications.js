Meteor.publish('images', function(limit) {
  check(limit, Number);

  return Images.find({}, {
    limit: limit
  });
});