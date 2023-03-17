$(function () {
  $('.header__slider').slick({
    dots: true,
    nextArrow:
      '<button class="slick-next" type="button"><img src="/images/down.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-prev" type="button"><img src="/images/up.svg" alt=""></button>',
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 371,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  })

  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    // arrows: false,
    // fade: true,
    asNavFor: '.product__content',
    nextArrow:
      '<button class="product-next" type="button"><img src="/images/down_blue.svg" alt=""></button>',
    prevArrow:
      '<button class="product-prev" type="button"><img src="/images/up_blue.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 3,
          vertical: false,
          arrows: false,
          centerMode: false,
          dots: true,
        },
        breakpoint: 461,
        settings: {
          slidesToShow: 1,
          vertical: false,
          arrows: false,
          centerMode: false,
          dots: true,
        },
      },
    ],
  })
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    arrows: false,
    fade: true,
  })

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  })
})
