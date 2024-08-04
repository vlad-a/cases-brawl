$(document).ready(function () {
  // Используем метод .each() для обхода всех элементов с классом section-top-content__title
  $(".section-top-content__title").each(function () {
    // Получаем текст из span внутри текущего элемента
    var textToCopy = $(this).find("span").text();

    // Вставляем текст внутрь div с классом section-top-content__title--back для текущего элемента
    $(this).find(".section-top-content__title--back").text(textToCopy);
  });

  if ($(window).width() < 992) {
    // Код не будет выполняться на экранах меньше 992
  } else if ($(window).width() < 1300) {
    // Получаем все элементы с классом .header-center-list__item
    $(".header-center-list__item").each(function () {
      $(this).on("mouseover", function () {
        expandElement($(this));
      });

      $(this).on("mouseout", function () {
        collapseElement($(this));
      });
    });

    function expandElement(element) {
      element.css("width", element[0].scrollWidth + "px");
    }

    function collapseElement(element) {
      element.css("width", "45px"); // или другое начальное значение
    }
  } else if ($(window).width() < 1500) {
    // Получаем все элементы с классом .header-center-list__item
    $(".header-center-list__item").each(function () {
      $(this).on("mouseover", function () {
        expandElement($(this));
      });

      $(this).on("mouseout", function () {
        collapseElement($(this));
      });
    });

    function expandElement(element) {
      element.css("width", element[0].scrollWidth + "px");
    }

    function collapseElement(element) {
      element.css("width", "49px"); // или другое начальное значение
    }
  }

  const burger = $(".header__burger");
  const headerList = $(".header-center-list");
  const headerBox = $(".header-center,.header-top__right");

  burger.on("click", function () {
    // Переключение класса 'active' для header__burger
    burger.toggleClass("active");
    headerBox.toggleClass("active");
    // Переключение класса 'active' для header-center-list
    headerList.toggleClass("active");
  });

  $(".ccu-bet-params__bottom,.crash-top__more").click(function () {
    $(this).toggleClass("active");
  });

  $(".sign__btn.sign-in").click(function () {
    $(".popup-sign--in").addClass("active");
  });
  $(".popup-sign--in__back, .psic__close, .wp__back").click(function () {
    $(".popup-sign--in, .witdrow-popup").removeClass("active");
  });
  $(".faq-list-item__top").click(function () {
    var $currentTop = $(this);
    var $currentBottom = $currentTop.siblings(".faq-list-item__bottom");

    // Закрываем предыдущий элемент, если он не текущий
    $(".faq-list-item__top").not($currentTop).removeClass("active");
    $(".faq-list-item__bottom")
      .not($currentBottom)
      .animate({ height: 0 })
      .removeClass("active");

    // Переключаем класс и анимируем текущий элемент
    $currentTop.toggleClass("active");
    if ($currentTop.hasClass("active")) {
      var height = $currentBottom.prop("scrollHeight");
      $currentBottom.animate({ height: height }, 250).addClass("active");
    } else {
      $currentBottom.animate({ height: 0 }, 250).removeClass("active");
    }
  });
  if ($(window).width() < 1200) {
    $(".bonus__list").slick({
      slidesToShow: 2,
      adaptiveHeight: true,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 992, // Если ширина экрана меньше 1024px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "02/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement && hoursElement && minutesElement && secondsElement) {
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          daysElement.innerText = Math.floor(distance / day);
          hoursElement.innerText = Math.floor((distance % day) / hour);
          minutesElement.innerText = Math.floor((distance % hour) / minute);
          secondsElement.innerText = Math.floor((distance % minute) / second);

          // Остальной код
        }, 0);
    }
  })();
  function swapElements() {
    if ($(window).width() < 992) {
      // Поменять местами элементы
      $(".upgrade-main__center").insertAfter(".upgrade-main__right");
    } else {
      // Вернуть исходный порядок элементов
      $(".upgrade-main__right").insertAfter(".upgrade-main__center");
    }
  }

  // Вызвать функцию при загрузке страницы и при изменении размера окна
  swapElements();
  $(window).resize(swapElements);
  if ($(window).width() < 1700) {
    $(".quests-list__slider").slick({
      slidesToShow: 4,
      adaptiveHeight: true,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1500, // Если ширина экрана меньше 1024px
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200, // Если ширина экрана меньше 1024px
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992, // Если ширина экрана меньше 1024px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Если ширина экрана меньше 1024px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  $(".drum-step-3-center--box").click(function () {
    $(".drum-step-3").addClass("active");
  });

  $(".inventory-do__upgrade").click(function () {
    $(".witdrow-popup").addClass("active");
  });

  const selectedAll = document.querySelectorAll(".selector-wrapper");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;

    const optionsList = optionsContainer.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      let arrow = selected.parentNode.querySelector(".arrow");

      if (optionsContainer.classList.contains("active")) {
        optionsContainer.classList.remove("active");

        arrow.classList.add("rotated");
      } else {
        let currentActive = document.querySelector(".options-container.active");

        if (currentActive) {
          currentActive.classList.remove("active");
          let anotherArrow = currentActive.parentNode.querySelector(".arrow");

          anotherArrow.classList.add("rotated");
        }

        arrow.classList.remove("rotated");
        optionsContainer.classList.add("active");
      }
    });

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selected.querySelector(".selected").innerHTML =
          o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");

        let arrow = selected.parentNode.querySelector(".arrow");
        arrow.classList.add("rotated");
      });
    });
  });

  window.addEventListener("click", function (e) {
    if (e.target.closest(".select-box") === null) {
      closeDropdown();
    }
  });

  function closeDropdown() {
    const selectedAll = document.querySelectorAll(".selector-wrapper");

    selectedAll.forEach((selected) => {
      const optionsContainer = selected.previousElementSibling;
      let arrow = selected.parentNode.querySelector(".arrow");

      optionsContainer.classList.remove("active");
      arrow.classList.add("rotated");
    });
  }
  $(".deposit-left-list__item").click(function () {
    $(".deposit-left-list__item").removeClass("active");
    $(this).addClass("active");
  });
  $(".tabs__wrapper").each(function () {
    var $tabs = $(this).find(".tab");
    var $tabItems = $(this).find(".tab_item");

    $tabs.each(function (index) {
      $(this).click(function () {
        $tabs.removeClass("active"); // Удаляем класс active у всех элементов .tab внутри текущего .tabs__wrapper
        $(this).addClass("active"); // Добавляем класс active только текущему элементу .tab
        $tabItems.hide().eq(index).fadeIn(); // Скрываем все .tab_item и показываем только соответствующий по индексу
      });
    });

    // Добавляем класс active к первому элементу .tab внутри текущего .tabs__wrapper
    $tabs.first().addClass("active");
  });
  // Добавляем класс active к первому элементу .tab
  $(".tabs .tab:first").addClass("active");
});
