//добавлення класу для webp, перевіряє чи браузер може відобразити формат
//якщо може, то добаляє класи(webp,no-webp)
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
// ------------------
var swiper = new Swiper(".slider__block", {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 3000,
   },

});
// ------------------
(function ($) {
   $(function () {
      //tabs
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs-item--active)', function () {
         $(this)
            .addClass('catalog__tabs-item--active').siblings().removeClass('catalog__tabs-item--active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
      });

      //card front>back
      $('.catalog-item__link').each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__front-side').eq(i).toggleClass('catalog-item__front-side--active');
            $('.catalog-item__back-side').eq(i).toggleClass('catalog-item__back-side--active');
         });
      });
      //card back>front
      $('.catalog-item__back-link').each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__front-side').eq(i).toggleClass('catalog-item__front-side--active');
            $('.catalog-item__back-side').eq(i).toggleClass('catalog-item__back-side--active');
         });
      });

      //modal
      $('.modal__close').on('click',function(){
         $('.popup, #consultation, #order, #thanks').fadeOut('slow');
      });
      
      $('[data-modul=consultation]').on('click', function(){
         $('.popup, #consultation').fadeIn('slow');
      });

      $('.catalog-item__btn').each(function(i){
         $(this).on('click',function(){
            $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
            $('.popup, #order').fadeIn('slow');
         });
      });

      $('#communication__form').validate({
         rules: {
            user_name: {
               required: true,
               minlength: 2
            },
            user_phone: "required",
            user_email: {
               required: true,
               email: true
            }  
         },
         messages: {
            user_name: {
               required: "Пожалуйста, введите свое имя",
               minlength: jQuery.validator.format("Не менее {0} символа!")
             },
            user_phone: "Пожалуйста, введите свой номер телефона",
            user_email: {
               required: "Пожалуйста, введите свой email",
               email: "Неправильно введен адрес почты"
            } 
         } 
      });
      $('#consultation form').validate({
         rules: {
            user_name: {
               required: true,
               minlength: 2
            },
            user_phone: "required",
            user_email: {
               required: true,
               email: true
            }  
         },
         messages: {
            user_name: {
               required: "Пожалуйста, введите свое имя",
               minlength: jQuery.validator.format("Не менее {0} символа!")
             },
            user_phone: "Пожалуйста, введите свой номер телефона",
            user_email: {
               required: "Пожалуйста, введите свой email",
               email: "Неправильно введен адрес почты"
            } 
         } 
      });
      $('#order form').validate(
         {
            rules: {
               user_name: {
                  required: true,
                  minlength: 2
               },
               user_phone: "required",
               user_email: {
                  required: true,
                  email: true
               }  
            },
            messages: {
               user_name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Не менее {0} символа!")
                },
               user_phone: "Пожалуйста, введите свой номер телефона",
               user_email: {
                  required: "Пожалуйста, введите свой email",
                  email: "Неправильно введен адрес почты"
               } 
            } 
         }
      );
   });
})(jQuery);