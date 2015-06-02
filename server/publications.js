Meteor.publish('images', function(limit, userSlug) {

	var findQuery = {};
	if (userSlug) {
		findQuery = { userSlug : userSlug };
	}

  return Images.find(findQuery, {
  	limit: limit,
  	sort: { uploadedAt: -1 }
  });
});