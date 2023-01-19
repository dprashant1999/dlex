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


$(document).ready(function() {
 
  // searchtoggle mobile
  $("#searchbtn").on("click", function(a) {
    $(".searchHolder").toggle("active");
  });

  // header profile 
  $("#userProfile").on("click", function(a) {
    $(".homeProfile").addClass("open");
    a.stopPropagation()
  });
  $(document).on("click", function(a) {
    if ($(a.target).is(".homeProfile") === false) {
      $(".homeProfile").removeClass("open");
    }
  });

  // faq
  $('.faqContent').slideUp();
  $('.title_tab.active').next().slideDown();
  $('.title_tab').click(function(j) {   
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.title_tab').removeClass('active');
      $(this).next().slideUp();
    }
    else {
      $('.title_tab').removeClass('active');
      $('.faqContent').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }     
  });
});

// tab
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("active");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("active");
  });
});

 // Chart.defaults.global.legend.labels.usePointStyle = true;
 const ctx = document.getElementById('myChart');
 new Chart(ctx, {
   type: 'line',
   data: {
     labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
     datasets: [{
       label: 'Click ADS',
       fill: false,
       data: [1000,2500,1500,2800,400,1700,2300],
     }, {
       label: 'View ADS',
       fill: false,
       data: [500,300,700,450,1500,2000,2000],		
     }]
   },
   options: {
     elements: {
         point:{
             radius: 0
         }
     },
     scales: {
       x:{
         grid: {
           display: false
         }
       },
       y: {
         beginAtZero: true,
         grid: {
           display: false
         },
         ticks: {
             min: 0,
             max: 3000,

             stepSize: 500
           }
       }
     },
     plugins: {
       display: true,
       legend: {
           align: "end",
         labels: {
             usePointStyle:true
         }
       }
     }
     
   }
 });

   
  // gift product ads swiper 
  var swiper = new Swiper(".adslider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });