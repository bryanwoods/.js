// Open https://thestrangeloop.com/news/strange-loop-2012-video-schedule in Chrome
(function() {
  var title = "The Higher Order Rubyist";

  videoAvailable = function(title) {
    return $('td a').filter(function(i, el) {
      return $(el).text() === title;
    }).length > 0;
  };

  var checkAvailability = function(title, callback) {
    if (videoAvailable(title)) {
      alert("ZOMG IT'S FINALLY HERE!!!");
      return false;
    } else {
      console.log("Bummer, '" + title + "' still hasn't been uploaded.");

      setTimeout(function() {
        document.location.reload();
      }, 60000);
    }
  };

  $(function() {
    checkAvailability(title);
  });
})();
