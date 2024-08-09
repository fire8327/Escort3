/* nav-slider */
const swiper = new Swiper('.nav-slider', {
    loop: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        }
    }
});

/* girlPage-slider */
const swiper3 = new Swiper('.girlPage-slider2', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true
});
const swiper4 = new Swiper('.girlPage-slider', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  thumbs: {
    swiper: swiper3,
  }
});


/* tabs */
$(".tab-main").each(function(index) {
    let $this = $(this);
    let prefix = "tabs-" + index;
  
    $this.find("ul a").each(function(tabIndex) {
      let $tab = $(this);
      let tabId = prefix + "-tab-" + tabIndex;
      let panelId = prefix + "-panel-" + tabIndex;
  
      $tab.attr("href", "#" + panelId);
      $tab.closest("li").attr("id", tabId);
    });
  
    $this.find(".tab-card").each(function(panelIndex) {
      $(this).attr("id", prefix + "-panel-" + panelIndex);
    });
  
    $this.tabs();
});

  
/* mobile menu */
$("#toggler").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menu").toggleClass("max-lg:top-[88px]")
    $("#overlay").toggleClass("hidden")
})


/* filter list */
$("#filterToggler").click(() => {
    $("#filterList").slideToggle()
    $("#filterToggler").find("img").toggleClass("max-lg:rotate-180 lg:rotate-180")
})