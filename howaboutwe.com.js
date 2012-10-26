var environment = function() {
  var result,
      subdomain = window.location.host.split(".")[0];

  var subdomainMap = {
    "www": "PRODUCTION",
    "local": "DEVELOPMENT"
  };

  if (Object.keys(subdomainMap).indexOf(subdomain) > -1) {
    result = subdomainMap[subdomain];
  } else {
    result = subdomain;
  }

  return result.toUpperCase();
};

$(function() {
  $('body').prepend(
    "<center>" +
    "<h1 style='color:red;'>YOU ARE CURRENTLY ON " + environment() + "</h1>" +
    "</center>"
  );
});

