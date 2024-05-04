$(document).ready(function() {
  $('#animateBtn').click(function() {
      $('.box-container').addClass('animate');
      setTimeout(function() {
          $('.box-container').removeClass('animate');
      }, 2000); // Adjust the duration of the animation as needed
  });
});
$(document).ready(function() {
$('#readMoreButton').click(function() {
    $('#secondParagraph').toggle();
});
});
$(document).ready(function() {
  $('.box button').click(function() {
      $(this).siblings('.additional-info').slideToggle();
  });
});
$(document).ready(function() {
  $(".toggle-info-btn").click(function() {
      $(this).siblings(".info-container").toggle();
  });
});


function toggleDescription(index) {
var descriptions = document.getElementsByClassName("infoDisplay");
for (var i = 0; i < descriptions.length; i++) {
  if (i === index - 1) {
    descriptions[i].style.display = (descriptions[i].style.display === "block") ? "none" : "block";
  } else {
    descriptions[i].style.display = "none";
  }
}
}


$(document).ready(function() {
$('.member img').hover(
    function() {
        $(this).closest('.member').addClass('zoomed');
    },
    function() {
        $(this).closest('.member').removeClass('zoomed');
    }
);
});


$(document).ready(function(){
var isAnimating = false;

// Function to animate grid items
function animateGrid() {
  $('#team-grid .member').each(function(index){
    $(this).delay(400 * index).fadeIn(100);
  });
}

// Animate grid items when button is clicked
$('#animateButton').click(function(){
  if (!isAnimating) {
    isAnimating = true;
    // Fade out all images slowly
    $('#team-grid .member').fadeOut('slow', function(){
      // After fade out, fade in images one by one
      animateGrid();
      isAnimating = false;
    });
  }
});
});