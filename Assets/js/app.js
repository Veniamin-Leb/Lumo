(function () {
    "use strict"; 

    function initSlider() {
        $('.animator__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 7000,
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
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button class="slick-prev"><svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 34L5 20.2787L23 3" stroke="#E1DEFC" stroke-width="6" stroke-linecap="round"/></svg></button>',
            nextArrow: '<button class="slick-next"><svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 34L21 20.2787L3 3" stroke="#E1DEFC" stroke-width="6" stroke-linecap="round"/></svg></button>',
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                      arrows: false, 
                    }
                  }
              ]
        });
    }
    function initSlider3() {
        $('.fidback__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
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
      const openModalButtons = document.querySelectorAll(".openModalBtn");
      const closeModalBtn = document.querySelector(".close"); // Кнопка закрытия

    // Добавляем обработчики на каждую кнопку
      openModalButtons.forEach((button) => {
          button.addEventListener("click", () => {
              modal.style.display = "flex"; // Показываем окно
          });
      });

    // Закрытие модального окна (по нажатию на крестик)
      closeModalBtn.addEventListener("click", () => {
          modal.style.display = "none"; // Скрываем окно
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
        initSlider2();
        initSlider3(); // Инициализация слайдера
    });
////////////////////////Квиз//////////////////////////////////////////////////////////////////
(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", function () {
        const steps = document.querySelectorAll(".quiz-step"); // Все шаги квиза
        const progressBars = document.querySelectorAll(".progress-bar"); // Прогресс-бары
        let currentStep = 0; // Текущий шаг

        // Объект для хранения данных квиза
        const quizData = {
            tariff: "",
            animator: "",
            show: "",
            guests: {
                children: 5, // Значение по умолчанию
                adults: 5    // Значение по умолчанию
            },
            date: "",  // Дата по умолчанию может быть пустой или заданной
            time: "",
            contacts: {
                name: "",
                phone: "",
                message: ""
            }
        };

        // Функция обновления шагов и прогресс-бара
        function updateSteps() {
            steps.forEach((step, index) => {
                step.classList.toggle("active", index === currentStep);
            });

            progressBars.forEach((bar) => {
                if (currentStep === 0) {
                    bar.style.display = "none";
                } else {
                    bar.style.display = "block";
                    const progress = ((currentStep) / (steps.length - 1)) * 100;
                    bar.style.setProperty("--progress-width", `${progress}%`);
                }
            });

            document.querySelectorAll(".btn-prev").forEach((btn) => {
                btn.style.display = currentStep === 0 ? "none" : "inline-block";
            });

            document.querySelectorAll(".btn-next").forEach((btn) => {
                btn.textContent = currentStep === steps.length - 1 ? "Отправить" : "Далее";
            });
        }

        // Кнопка "Далее"
        document.querySelectorAll(".btn-next").forEach((btn) => {
            btn.addEventListener("click", () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                } else {
                    sendQuizData();
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
            btn.addEventListener("click", (e) => {
                quizData.tariff = e.target.closest(".blocks__block").querySelector("p").innerText;
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                }
            });
        });

        // Выбор аниматора
        document.querySelectorAll(".animat__block").forEach((block) => {
            block.addEventListener("click", () => {
                quizData.animator = block.querySelector("p").innerText;
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                }
            });
        });

        // Выбор шоу-программы
        document.querySelectorAll(".show__block").forEach((block) => {
            block.addEventListener("click", () => {
                quizData.show = block.querySelector("p").innerText;
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                }
            });
        });

        // Выбор количества гостей
        document.querySelectorAll(".block").forEach((block, index) => {
            const minusButton = block.querySelector(".back");
            const plusButton = block.querySelectorAll("button")[1];
            const numberDisplay = block.querySelector("b");

            minusButton.addEventListener("click", () => {
                let currentValue = parseInt(numberDisplay.textContent, 10);
                if (currentValue > 1) {
                    currentValue--;
                    numberDisplay.textContent = currentValue;
                }
                quizData.guests[index === 0 ? "children" : "adults"] = currentValue;
            });

            plusButton.addEventListener("click", () => {
                let currentValue = parseInt(numberDisplay.textContent, 10);
                currentValue++;
                numberDisplay.textContent = currentValue;
                quizData.guests[index === 0 ? "children" : "adults"] = currentValue;
            });
        });

        // Выбор даты и времени
        document.getElementById("selected-date").addEventListener("change", (e) => {
            quizData.date = e.target.value;
        });

        document.querySelectorAll(".time button").forEach((button) => {
            button.addEventListener("click", (e) => {
                quizData.time = e.target.previousElementSibling.innerText;
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                }
            });
        });

        // Сохранение контактной информации
        document.querySelector("[name='name']").addEventListener("input", (e) => {
            quizData.contacts.name = e.target.value;
        });

        document.querySelector("[name='phone']").addEventListener("input", (e) => {
            quizData.contacts.phone = e.target.value;
        });

        document.querySelector("[name='message']").addEventListener("input", (e) => {
            quizData.contacts.message = e.target.value;
        });

        // Отправка данных квиза на сервер
        function sendQuizData() {
            // Получаем поля ввода имени и телефона
            const nameField = document.querySelector("[name='name']");
            const phoneField = document.querySelector("[name='phone']");
        
            // Проверяем, заполнены ли поля
            const isNameValid = nameField.value.trim() !== "";
        
            // Извлекаем только цифры из значения телефона
            const phoneValue = phoneField.value.replace(/\D/g, ''); // Убираем все нецифровые символы
            const isPhoneValid = phoneValue.length >= 10; // Проверяем, что номер состоит хотя бы из 10 цифр (или нужное количество для вашего формата)
        
            if (!isNameValid || !isPhoneValid) {
                // Добавляем красную рамку для пустых полей
                if (!isNameValid) {
                    nameField.style.background = "#e48b97";
                } else {
                    nameField.style.background = ""; // Сбрасываем рамку, если поле корректно
                }
        
                if (!isPhoneValid) {
                    phoneField.style.background = "#e48b97";
                } else {
                    phoneField.style.background = ""; // Сбрасываем рамку, если поле корректно
                }
        
                // Выводим сообщение об ошибке
                alert("Пожалуйста, заполните имя и телефон.");
                return; // Прерываем выполнение функции
            }
        
            // Если поля заполнены, сбрасываем рамки
            nameField.style.background = "";
            phoneField.style.background = "";
        
            // Формируем тело письма, учитывая значения по умолчанию для детей, взрослых и даты
            const emailBody = `
                Форма "Заявка на праздник"
                Тариф: ${quizData.tariff || "Не выбран"}
                Аниматор: ${quizData.animator || "Не выбран"}
                Дети: ${quizData.guests.children || "10"}
                Взрослые: ${quizData.guests.adults || "5"}
                Дата: ${quizData.date || formattedDate}
                Время: ${quizData.time || "Не выбрано"}
                Имя: ${quizData.contacts.name}
                Телефон: ${quizData.contacts.phone}
                Сообщение: ${quizData.contacts.message}
            `;
        
            alert("Отправлено: \n" + emailBody); // Временно выводим данные в alert
        
            // Пример отправки через fetch
            fetch("https://example.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(quizData),
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Данные успешно отправлены!");
                    } else {
                        alert("Ошибка отправки данных.");
                    }
                })
                .catch((error) => {
                    alert("Ошибка отправки данных: " + error.message);
                });
        }
        
        // Инициализация
        updateSteps();
    });
})();
////////////////////////Форма с телефоном//////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const modal_ph = document.getElementById("modal_ph"); 
    const openModalPh = document.querySelectorAll(".openModalPh");
    const closeModalBtnPh = document.querySelector(".close_ph"); // Кнопка закрытия

    // Элементы формы
    const nameField = document.querySelector("[name='name_ph']");
    const phoneField = document.querySelector("[name='phone_ph']");
    const messageField = document.querySelector("[name='message_ph']");
    const sendButton = document.getElementById("sendContactForm");

    let buttonText = ''; // Переменная для хранения текста кнопки, по которой открылось окно

    // Открытие модального окна при нажатии на кнопку
    openModalPh.forEach((button) => {
        button.addEventListener("click", () => {
            modal_ph.style.display = "flex"; // Показываем окно
            buttonText = button.textContent; // Сохраняем текст кнопки
        });
    });

    // Закрытие модального окна по нажатию на крестик
    closeModalBtnPh.addEventListener("click", () => {
        modal_ph.style.display = "none"; // Скрываем окно
    });

    // Закрытие модального окна при клике на фон
    window.addEventListener("click", (e) => {
        if (e.target === modal_ph) {
            modal_ph.style.display = "none"; // Скрываем окно
        }
    });

    // Валидация формы
    function validateForm() {
        // Убираем лишние пробелы и символы
        const nameValid = nameField.value.trim() !== ""; // Проверка имени на пустоту
        const phoneValue = phoneField.value.replace(/[^\d+()-\s]/g, ''); // Убираем все лишние символы
        const phoneValid = /^\+?\d{1,4}[\s-]?\(?\d{2,5}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/.test(phoneField.value.trim());  

        // Валидация полей
        if (!nameValid) {
            nameField.style.backgroundColor = "#e48b97"; // Подсвечиваем ошибку
        } else {
            nameField.style.backgroundColor = "";
        }

        if (!phoneValid) {
            phoneField.style.backgroundColor = "#e48b97"; // Подсвечиваем ошибку
        } else {
            phoneField.style.backgroundColor = "";
        }

        return nameValid && phoneValid; // Возвращаем true, если все поля валидны
    }

    // Отправка данных на сервер
    sendButton.addEventListener("click", function () {
        if (validateForm()) {
            const formData = `
            Форма: ${buttonText}
            Имя: ${nameField.value.trim()}
            Телефон: ${phoneField.value.trim()}
            Сообщение: ${messageField.value.trim()}
        `;
            alert("Отправлено: \n" + formData); // Временно выводим данные в alert
            // Пример отправки через fetch
            fetch("https://example.com/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((response) => {
                if (response.ok) {
                    alert("Данные успешно отправлены!");
                    modal_ph.style.display = "none"; // Закрытие модального окна после успешной отправки
                } else {
                    alert("Ошибка отправки данных.");
                }
            })
            .catch((error) => {
                alert("Ошибка отправки данных: " + error.message);
            });
        } else {
            alert("Пожалуйста, проверьте корректность заполнения полей.");
        }
    });
});

//////////////////////////////////////////////////////////////////////////////////////////
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
