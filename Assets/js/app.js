(function () {
    "use strict"; 

    function initSlider() {
        $('.animator__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<button class="slick-prev"><svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 3L5 16.7213L23 34" stroke="#4C8FD1" stroke-width="6" stroke-linecap="round"/></svg> </button>',
            nextArrow: '<button class="slick-next"><svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 34L21 20.2787L3 3" stroke="#4C8FD1" stroke-width="6" stroke-linecap="round"/></svg></button>',
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2, // Показывать 2 слайда
                    slidesToScroll: 1, // Переключать 1 слайд за раз
                  }
                },
                {
                    breakpoint: 770,
                    settings: {
                      slidesToShow: 1, // Показывать 2 слайда
                      slidesToScroll: 1,
                      arrows: false, // Переключать 1 слайд за раз
                    }
                  }
              ]
        });
    }
    function initSlider2() {
        $('.slider__content').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="slick-prev"><svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 34L5 20.2787L23 3" stroke="#E1DEFC" stroke-width="6" stroke-linecap="round"/></svg></button>',
            nextArrow: '<button class="slick-next"><svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 34L21 20.2787L3 3" stroke="#E1DEFC" stroke-width="6" stroke-linecap="round"/></svg></button>',
          });
    }
///////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header__menu button");
    const burgerMenu = document.querySelector(".header__burger");
    const hrElements = menuButton.querySelectorAll("hr");
  
    menuButton.addEventListener("click", () => {
      // Переключаем видимость меню
      burgerMenu.classList.toggle("active");
  
      // Превращаем полоски в крестик
      hrElements.forEach((hr, index) => {
        if (index === 0) {
          hr.classList.toggle("rotate-top");
        } else if (index === 1) {
          hr.classList.toggle("hidden");
        } else if (index === 2) {
          hr.classList.toggle("rotate-bottom");
        }
      });
    });
  });
///////////////////////////////////////////////////////////////////////////////
    // Получаем элементы
      const modal = document.getElementById("modal"); // Само модальное окно
      const modal_ph = document.getElementById("modal_ph"); 
      const openModalButtons = document.querySelectorAll(".openModalBtn"); // Все кнопки для открытия
      const openModalPh = document.querySelectorAll(".openModalPh")
      const closeModalBtn = document.querySelector(".close");
      const closeModalBtnPh = document.querySelector(".close_ph"); // Кнопка закрытия

    // Добавляем обработчики на каждую кнопку
      openModalButtons.forEach((button) => {
          button.addEventListener("click", () => {
              modal.style.display = "flex"; // Показываем окно
          });
      });
      openModalPh.forEach((button) => {
        button.addEventListener("click", () => {
            modal_ph.style.display = "flex"; // Показываем окно
        });
    });

    // Закрытие модального окна (по нажатию на крестик)
      closeModalBtn.addEventListener("click", () => {
          modal.style.display = "none"; // Скрываем окно
      });
      closeModalBtnPh.addEventListener("click", () => {
        modal_ph.style.display = "none"; // Скрываем окно
    });

      // Закрытие модального окна (по клику на фон)
      window.addEventListener("click", (e) => {
          if (e.target === modal) {
              modal.style.display = "none"; // Скрываем окно
          }
      });

    // 4. Инициализация основного скрипта
    document.addEventListener("DOMContentLoaded", () => {
        initSlider();
        initSlider2(); // Инициализация слайдера
    });
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".quiz-step"); // Все шаги квиза
  const progressBars = document.querySelectorAll(".progress-bar"); // Прогресс-бары
  let currentStep = 0; // Текущий шаг

  // Функция обновления шагов и прогресс-бара
  function updateSteps() {
      // Показываем активный шаг
      steps.forEach((step, index) => {
          step.classList.toggle("active", index === currentStep);
      });

      // Обновляем прогресс-бар
      progressBars.forEach((bar) => {
          if (currentStep === 0) {
              bar.style.display = "none"; // Прячем прогресс-бар на первом шаге
          } else {
              bar.style.display = "block"; // Показываем прогресс-бар
              const progress = ((currentStep) / (steps.length - 1)) * 100; // Вычисляем прогресс
              bar.style.setProperty("--progress-width", `${progress}%`); // Устанавливаем CSS-переменную
          }
      });

      // Управление кнопками "Назад" и "Далее"
      document.querySelectorAll(".btn-prev").forEach((btn) => {
          btn.style.display = currentStep === 0 ? "none" : "inline-block"; // Прячем "Назад" на первом шаге
      });

      document.querySelectorAll(".btn-next").forEach((btn) => {
          btn.textContent = currentStep === steps.length - 1 ? "Отправить" : "Далее"; // Меняем текст кнопки
      });
  }

  // Кнопка "Далее"
  document.querySelectorAll(".btn-next").forEach((btn) => {
      btn.addEventListener("click", () => {
          if (currentStep < steps.length - 1) {
              currentStep++;
              updateSteps();
          } else {
              alert("Форма отправлена!");
          }
      });
  });

  // Кнопка "Назад"
  document.querySelectorAll(".btn-prev").forEach((btn) => {
      btn.addEventListener("click", () => {
          if (currentStep > 0) {
              currentStep--;
              updateSteps();
          }
      });
  });

  // Кнопка выбора тарифа
  document.querySelectorAll(".btn-select-tariff").forEach((btn) => {
      btn.addEventListener("click", () => {
          if (currentStep < steps.length - 1) {
              currentStep++;
              updateSteps();
          }
      });
  });

  // Инициализация
  updateSteps();
});
////////////////////////////////////////////////////////// 
document.querySelectorAll('.block').forEach((block) => {
    // Находим элементы кнопок и текста числа
    const minusButton = block.querySelector('.back');
    const plusButton = block.querySelectorAll('button')[1];
    const numberDisplay = block.querySelector('b');

    // Функция для уменьшения числа
    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(numberDisplay.textContent, 10);
        if (currentValue > 1) {
            numberDisplay.textContent = currentValue - 1;
        }
    });

    // Функция для увеличения числа
    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(numberDisplay.textContent, 10);
        numberDisplay.textContent = currentValue + 1;
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////
// Находим поле с датой
const dateInput = document.getElementById('selected-date');

// Получаем текущую дату
const today = new Date();

// Форматируем дату в формате YYYY-MM-DD
const formattedDate = today.toISOString().split('T')[0];

// Устанавливаем значение по умолчанию
dateInput.value = formattedDate;
//////////////////////////////////////////////////////////////////
const phoneInput = document.getElementById("phone");

        // Устанавливаем изначальное значение с "+7-"
        phoneInput.value = "+7 ";

        phoneInput.addEventListener("focus", function () {
            // При фокусе курсор устанавливается после "+7-"
            if (phoneInput.value === "+7 ") {
                setCursorPosition(phoneInput, 3); // Курсор после "+7-"
            }
        });

        phoneInput.addEventListener("input", function (e) {
            // Удаляем все символы, кроме цифр
            let value = phoneInput.value.replace(/\D/g, ""); 
            value = "+7 " + value.substring(1, 4) + " " + value.substring(4, 7) + " " + value.substring(7, 9) + " " + value.substring(9, 11);
            phoneInput.value = value.substring(0, 16); // Ограничиваем длину

            // Поддерживаем курсор на правильной позиции
            const cursorPosition = phoneInput.selectionStart;
            if (cursorPosition < 3) {
                setCursorPosition(phoneInput, 3);
            }
        });

        phoneInput.addEventListener("keydown", function (e) {
            // Блокируем ввод любых символов, кроме цифр, Backspace, Delete, стрелок
            const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete"];
            if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
                e.preventDefault();
            }

            // Запрещаем удаление "+7-"
            if ((e.key === "Backspace" || e.key === "Delete") && phoneInput.selectionStart <= 3) {
                e.preventDefault();
            }
        });

        function setCursorPosition(input, position) {
            input.setSelectionRange(position, position);
        }
/////////////////////////////////////////////////////////////////////////
const phoneInput1 = document.getElementById("phone1");

        // Устанавливаем изначальное значение с "+7-"
        phoneInput1.value = "+7 ";

        phoneInput1.addEventListener("focus", function () {
            // При фокусе курсор устанавливается после "+7-"
            if (phoneInput1.value === "+7 ") {
                setCursorPosition(phoneInput1, 3); // Курсор после "+7-"
            }
        });

        phoneInput1.addEventListener("input", function (e) {
            // Удаляем все символы, кроме цифр
            let value = phoneInput1.value.replace(/\D/g, ""); 
            value = "+7 " + value.substring(1, 4) + " " + value.substring(4, 7) + " " + value.substring(7, 9) + " " + value.substring(9, 11);
            phoneInput1.value = value.substring(0, 16); // Ограничиваем длину

            // Поддерживаем курсор на правильной позиции
            const cursorPosition = phoneInput1.selectionStart;
            if (cursorPosition < 3) {
                setCursorPosition(phoneInput1, 3);
            }
        });

        phoneInput1.addEventListener("keydown", function (e) {
            // Блокируем ввод любых символов, кроме цифр, Backspace, Delete, стрелок
            const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete"];
            if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
                e.preventDefault();
            }

            // Запрещаем удаление "+7-"
            if ((e.key === "Backspace" || e.key === "Delete") && phoneInput1.selectionStart <= 3) {
                e.preventDefault();
            }
        });

        function setCursorPosition(input, position) {
            input.setSelectionRange(position, position);
        }
  
  
  
  
  
  
  
      




})();
