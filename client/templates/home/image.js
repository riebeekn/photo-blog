Template.image.helpers({
	postDate: function(date) {
		return moment(this.uploadedAt).format('MMMM Do YYYY, h:mm:ss a');
	},
  ownImage: function() {
    return this.userId === Meteor.userId();
  }
});

Template.image.events({
	'click .delete-image': function(e) {
		e.preventDefault();

	  var sure = confirm('Are you sure you want to delete this image?');
    if (sure === true) {
    	Images.remove({ _id:this._id }, function(error,result) {
        if (error) {
    		  toastr.error("Delete failed... " + error);
        } else {
          toastr.success('Image deleted!');
        }
      })
    }
  }
});