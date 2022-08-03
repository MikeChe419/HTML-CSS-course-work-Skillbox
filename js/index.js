(() => {
  function setBurger (params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.linksClass}`);

    function closeBurger () {
      if (window.screen.width <= 1368) {
        btn.classList.toggle(params.activeClass);
        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
            menu.classList.add(params.activeClass);
            document.body.style.overflow = 'hidden';
          } else {
          menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        }
      }
    };

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        btn.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", closeBurger);

  links.forEach((link) => {
    link.addEventListener("click", closeBurger);
  });
}

setBurger({
  btnClass: "header__burger-btn",
  menuClass: "header__nav",
  activeClass: "is-opened",
  hiddenClass: "is-closed",
  linksClass: "js-menu-link"
});
})();

function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener('click', function(evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});

const swiper = new Swiper('.swiper1', {
  slidesPerView: 1,
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
    },
  });

const slider2 = new Swiper ('.galery__swiper', {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row"
      },
      spaceBetween: 30,
      breakpoints: {
        676: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          grid: {
            rows: 2,
          },
          spaceBetween: 34,
        },
        1368: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          grid: {
            rows: 2,
          },
          spaceBetween: 30,
        },
      },

      keyboard: true,
      autoHeight: false,
      loop: false,
      navigation: {
        nextEl: '.galery__btn-next',
        prevEl: '.galery__btn-prev',
        },
      pagination: {
          el: ".galery__pagination",
          type: "fraction"
        },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

  const slider4 = new Swiper ('.projects__swiper', {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1110: {
          slidesPerView: 3,
      },
    },
      navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev',
        },
  });

  const slider5 = new Swiper ('.events__swiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      clickable: true,
      el: '.events__pagination',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.events__btn-next',
          prevEl: '.events__btn-prev',
        },
      },
      1368: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.events__btn-next',
          prevEl: '.events__btn-prev',
        },
      },
    },

  });

function ArtDefault() {
  const element = document.querySelector('.art');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
}

ArtDefault();

document.querySelectorAll('.galery__slide-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e){
    const picture=e.currentTarget.dataset.picture;

    document.querySelectorAll('.galery__slide-btn').forEach(function(btn) {
btn.classList.remove('galery_slide-active')});
      e.currentTarget.classList.add('galery_slide-active');
      document.querySelectorAll('.galery-modal-container').forEach(function(tabsBtn){
        tabsBtn.classList.remove('galery-modal-container-active')});

document.querySelector(`[data-target = ${picture}]`).classList.add('galery-modal-container-active');
  });
});

window.addEventListener('DOMContentLoaded', function() {
  document. querySelector('.clother-btn').addEventListener('click', function() {
    document.querySelector('.galery-modal-container').classList.remove('galery-modal-container-active')
  })
});

$(".jq-accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false,
});

document.querySelectorAll('.catalog__title-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e){
    const path=e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__title-btn').forEach(function(btn) {
btn.classList.remove('catalog__title-btn-active')});
      e.currentTarget.classList.add('catalog__title-btn-active');
      document.querySelectorAll('.catalog__content-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('item-active')});

document.querySelector(`[data-target = ${path}]`).classList.add('item-active');
  });
});

document.querySelectorAll('.js-painter').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e){
    const painter=e.currentTarget.dataset.painter;

document.querySelectorAll('.js-painter'). forEach(function(btn) {
  btn.classList.remove('js-painter-active')});
  e.currentTarget.classList.add('js-painter-active');
  document.querySelectorAll('.catalog__artist-year-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('artist-active')});

document.querySelector(`[data-target = ${painter}]`).classList.add('artist-active');
  });
});

new JustValidate('.js-form-validate', {
  rules: {
    name: {
      required:true,
      minLength:2,
      maxLength: 30
    },
    tel: {
      required:true,
      function: (name, value) => {
        const phone = selector.inputmask.unmasedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel:  'Недопустимый формат'
  },
    colorWrong: '#D11616'
});

tippy('.js-tooltip', {
  theme: 'violet',
});

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active-2",
  disabledClassName: "is-disabled"
}

    function onDisable(evt) {
      if (evt.target.classList.contains(params.disabledClassName)) {
        evt.target.classList.remove(params.disabledClassName, params.activeClassName);
        evt.target.removeEventListener("animationend", onDisable);
      }
    }

    function setMenuListener() {
    document.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`))  {
        activeElements.forEach((current) => {
          if(current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest('.js-header-dropdown-btn')) {
        const btn = evt.target.closest('.js-header-dropdown-btn');
        const genres = btn.dataset.genres;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${genres}"]`);

        btn.classList.toggle('is-active-2');

        if (!drop.classList.contains('is-active-2')) {
          drop.classList.add('is-active-2');
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add('is-disabled');
        }
      };
    });
  }

  setMenuListener();

  ymaps.ready(init);
  function init(){

    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 14,
        controls: ['geolocationControl']
    },
    {
      geolocationControlPosition:  { top: "20px", right: "20px" },
      zoomControlPosition:  { top: "200px", right: "20px" },
      searchControlProvider: 'yandex#search'
    }),

    zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
      }
    });

    myMap.controls.add(zoomControl);

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),
    myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
}, {
    iconLayout: 'default#image',

    iconImageHref: './img/map-marker.svg',

    iconImageSize: [20, 20],
    iconContentLayout: MyIconContentLayout
  });
    myMap.geoObjects.add(myPlacemark);
};

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top:elementPosition,
      behavior: 'smooth'
    });
  });
});

