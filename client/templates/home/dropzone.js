Template.dropzone.events({
  'dropped #dropzone': function(e) {
    var user = Meteor.user();

    FS.Utility.eachFile(e, function(file) {
      var newFile = new FS.File(file);
      newFile.username = user.username;
      newFile.userId = user._id;
      newFile.userSlug = Slug.slugify(user.username);
      
      Images.insert(newFile, function (error, fileObj) {
        if (error) {
    		  toastr.error("Upload failed... please try again.");
        } else {
          Meteor.setTimeout(function() {
            if (fileObj.isUploaded()) {
              console.log('Root URL: ' + Meteor.absoluteUrl());
              console.log('Image URL: ' + fileObj.url());
              console.log('Full image URL: ' + Meteor.absoluteUrl(fileObj.url()));
            }
          }, 2000);
          toastr.success('Upload succeeded!');
        }
      });
    });
  }
});