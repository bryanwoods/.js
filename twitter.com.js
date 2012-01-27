(function() {
  var hidePromoted = function(callback) {
    $('.js-disclosure').closest('.content').each(function(i, el) {
      $(el).parent().remove();
    });

    $('li.promoted-trend').remove();

    return callback;
  };

  $(function() {
    hidePromoted(setInterval(function() {
      hidePromoted();
    }, 200));
  });
})();
