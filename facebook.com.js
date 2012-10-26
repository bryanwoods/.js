$(function() {
  if (window.location.href !== "http://www.facebook.com/home.php") {
    return;
  }

  var wantsToBeHere = function() {
    return confirm("Do you really want to be here?");
  };

  if(!wantsToBeHere()) {
    window.location = "http://lambda-the-ultimate.org/";
  }
});
