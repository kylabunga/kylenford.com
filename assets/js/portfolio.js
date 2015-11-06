// Create a lightbox

var $lightbox = $("<div class='lightbox'></div>");
var $img = $("<img>");
var $caption = $("<p class='caption'></p>");


// Add image and caption to lightbox

$lightbox
  .append($img)
  .append($caption);

// Add lighbox to document

$('body').append($lightbox);


$('.gallery li').click(function (e) {
  e.preventDefault();

  // Get image link and description
  var src = $(this).children('img').attr("src");
  var cap = $(this).children('img').attr("alt");

  // Add data to lighbox

  $img.attr('src',src);
  $caption.text(cap);

  // $lightbox.append('<img src="' + src + '"></img><p class="caption">' + caption + '</p>');

  // Show lightbox

  $lightbox.show();

  $lightbox.click(function () {
    $lightbox.hide();
  });
});

