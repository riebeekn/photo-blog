Slug = {};

// taken from http://themeteorchef.com/recipes/slugged-routes/
Slug.slugify = function(value) {
  // Take our passed value and format it using a series of regular expressions.
  // The solution for this was derrived from a bit of experimentation and some
  // information found here: http://bit.ly/1LtXYCn.
  var formatted = value
                  // Take our passed value and convert it to lower case.
                  .toLowerCase()
                  // Replace all of the spaces in our value with hyphens (-).
                  .replace(/ /g,'-')
                  // Replace any hyphens (-) that come *after* another hyphen
                  // like --. This helps us prevent slugs like this--url-is-great.
                  .replace(/[-]+/g, '-')
                  // Replace any non-alphanumeric characters, but skip non-english
                  // characters like ü or é and hyphens (we've already done this).
                  // We also use /g to do this globally across the entire string
                  // as opposed to just on the first occurrence.
                  .replace(/[^\w\x80-\xFF-]+/g,'');

  return formatted;
}