//Модалки
const modalTriggers = document.querySelectorAll('.call-btn'),
  modal = document.querySelector('.modal'),
  closeModal = document.querySelector('.modal__close-btn'),
  headerbtn = document.querySelector('.top-header__close-btn'),
  answerBtns = document.querySelectorAll('.answers__content-btn'),
  menuHeader = document.querySelector('.top-header__center'),
  scrollTop = document.querySelector('.footer__scroll-top');


const modalCloseTrigger = function () {
  document.body.style.overflow = '';
  modal.classList.remove('is-open');
  modal.classList.add('is-close');

};

const modalOpen = function () {
  modal.classList.add('is-open');
  modal.classList.remove('is-close');
  document.body.style.overflow = 'hidden';
};


modalTriggers.forEach(btn => {
  btn.addEventListener('click', modalOpen);
});

closeModal.addEventListener('click', modalCloseTrigger);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modalCloseTrigger();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    modalCloseTrigger();
  }
});

function modalScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    modalOpen();
    window.removeEventListener('scroll', modalScroll);
  }
}

window.addEventListener('scroll', modalScroll);

// меню хедер

function headerMenu() {
  headerbtn.addEventListener('click', () => {
    menuHeader.classList.toggle('top-header__center--active');
    headerbtn.classList.toggle('top-header__close-btn--active')
  });

  menuHeader.addEventListener('click', (e) => {
    if(e.target == menuHeader && menuHeader.classList.contains('top-header__center--active')) {
      menuHeader.classList.remove('top-header__center--active');
    }
  })
}

headerMenu();

// аккордеоны

const accordBtns = document.querySelectorAll('.answers__content-btn');

accordBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    let content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      document.querySelectorAll('.answers__content-btn').forEach(el => {
        el.classList.remove('answers__content-btn--active');
      });
      document.querySelectorAll('.answers__content-btn__text').forEach(el => el.style.maxHeight = null);
      document.querySelectorAll('.answers__content-btn__text').forEach(el => el.style.opacity = '0');

    } else {

      document.querySelectorAll('.answers__content-btn').forEach(el => {
        el.classList.remove('answers__content-btn--active');
      });
      btn.classList.add('answers__content-btn--active');
      document.querySelectorAll('.answers__content-btn__text').forEach(el => el.style.maxHeight = null);
      document.querySelectorAll('.answers__content-btn__text').forEach(el => el.style.opacity = '0');
      content.style.opacity = '1';
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
});


//Кастомный селект

let select = function () {
  let selectHeader = document.querySelectorAll('.select-geo-header__header');
  let selectItem = document.querySelectorAll('.select-geo-header__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle) 
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose) 
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
        select = this.closest('.geo-header__select'),
        currentText = select.querySelector('.select-geo-header__current');

    currentText.innerText = text;
    select.classList.remove('is-active');
  }

}

select();

//слайдеры

const swiper1 = new Swiper('.fix__slider', {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: ".fix__slider-pagination-next",
    prevEl: ".fix__slider-pagination-prev",
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 5,
    }, 
    470: {
      slidesPerView: 2,
    },
    855: {
      slidesPerView: 3,
    },
  },
});

//jquery

//Плавный скролл
$(scrollTop).on('click', function (event) {

  // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
  if (this.hash !== "") {
    // Запретить поведение щелчка якоря по умолчанию
    event.preventDefault();

    // Хранить хэш
    var hash = this.hash;

    // Использование метода animate() jQuery для добавления плавной прокрутки страницы
    // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
      window.location.hash = hash;
    });
  } // Конец, если
});