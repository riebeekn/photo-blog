Meteor.publish('images', function(limit, userSlug) {
	check(limit, Number);

	var findQuery = {};
	if (userSlug) {
		check(userSlug, String);
		findQuery = { userSlug : userSlug };
	}

  return Images.find(findQuery, {
  	limit: limit,
  	sort: { uploadedAt: -1 }
  });
});