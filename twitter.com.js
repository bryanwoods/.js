(function() {
  var hidePromoted = function(callback) {
    $('.js-disclosure').closest('.content').each(function(i, el) {
      $(el).parent().remove();
    });

    $('li.promoted-trend').remove();

    return callback;
  };

  var hideTrends = function() {
    $('.module.trends').hide();
  };

  var hideWhoToFollow = function() {
    $('.module.wtf-module').hide();
  };

  $(function() {
    hideWhoToFollow();
    hideTrends();

    hidePromoted(setInterval(function() {
      hidePromoted();
    }, 200));
  });
})();
