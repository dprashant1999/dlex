// Active Class JS
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}


// searchtoggle mobile
$(function() {
  $("#searchbtn").on("click", function(a) {
    $(".searchHolder").toggle("active");
  });
});

// header profile 
$(function() {
  $("#userProfile").on("click", function(a) {
    $(".homeProfile").addClass("open");
    a.stopPropagation()
  });
  $(document).on("click", function(a) {
    if ($(a.target).is(".homeProfile") === false) {
      $(".homeProfile").removeClass("open");
    }
  });
});

// faq
$(function() {
  $('.inner_content').slideUp();
  $('.title_tab.active').next().slideDown();
  $('.title_tab').click(function(j) {   
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.title_tab').removeClass('active');
      $(this).next().slideUp();
    }
    else {
      $('.title_tab').removeClass('active');
      $('.inner_content').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }     
  });
});
