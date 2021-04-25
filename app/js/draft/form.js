let modal = document.querySelector(".finished__send");
let forma = document.querySelector(".modal");
var selector = document.querySelectorAll("input[type='tel']");

var im = new Inputmask("+38099-999-99-99");
im.mask(selector);


new JustValidate('.js-form', {
  rules: {
    checkbox: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    text: {
      required: true,
      minLength: 5,
      maxLenght: 300
    },
    tel: {
        required: true,
        minLength: 9
    }

  },
  messages: {
    checkbox: {
      required: 'Нужно принять условия конфиденциальности'
    },
    tel: {
      required: 'Обязательное поле',
    },
    text: {
      required: 'Обязательное поле',
      minLength: 'Введите минимум 5 символа',
      maxLenght: 'Слишком много символов'
    },
    email: 'Введите корректный E-mail'
  },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "php/mail.php", true);

        let formData = new FormData(form);

        xhr.addEventListener("load", function () {
            if(xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                    modal.classList.add("is-open");
                    modal.classList.remove("finished__send");
                    forma.classList.add("is-close");
                        console.log("форма отправлена");
                        form.reset();
                        break;
                    case 404:
                        console.log("Ничего не вышло");
                        break;
                    default:
                        console.log("Error");
                        break;
                }
            }
        });
        xhr.send(formData);
    },
  }); 