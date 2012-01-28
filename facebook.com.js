(function() {
  $(function() {
    if(confirm("Do you really want to be here?") === false) {
      window.location = "http://lambda-the-ultimate.org/";
    }
  });
})();
