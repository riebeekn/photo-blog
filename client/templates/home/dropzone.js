Template.dropzone.events({
  'dropped #dropzone': function(e) {
      FS.Utility.eachFile(e, function(file) {
				var FS = Npm.require('FS');
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
          } else {
            toastr.success('Upload succeeded!');
          }
      });
    });
  }
});

