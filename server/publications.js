Meteor.publish('images', function(limit, username) {

	var findQuery = {};
	if (username) {
		findQuery = { username : username };
	}

  return Images.find(findQuery, {
  	limit: limit,
  	sort: { uploadedAt: -1 }
  });
});