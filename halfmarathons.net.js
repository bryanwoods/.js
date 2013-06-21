$(function() {
  var results = [];

  $('span.text:contains("miles")').each(function(i, el) {
    var result;

    if (result = $(el).text().match(/[0-9]+(\.[0-9][0-9]?)? miles/)) {
      results.push(result[0].split(" ")[0]);
    }
  });

  var allRuns = function() {
    return results.map(function(i) {
      return parseFloat(i, 10);
    });
  };

  var totalMileage = function() {
    return parseInt(
      allRuns().reduce(function(memo, num) {
        return memo + num;
      })
    );
  };

  $('body').prepend(
    '<center>' +
      '<h1 style="color:red;">' +
      "You'll be running a total of " + totalMileage() + " miles!" +
      '</h1>' +
    '</center>'
  );
});
