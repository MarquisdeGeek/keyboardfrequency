$('.language_bar').append(
  $('<li>')
    .addClass('language')
    .html('Default')
    .click(function(e) {
      adjust( [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ]);
    })
);
