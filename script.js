const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const section = document.getElementById("section")

btn2.addEventListener('click', () => {
  section.style.display = 'block'
  btn2.style.background = 'white'
  btn1.style.background = '#d3d3d3'
  btn2.style.zIndex = '1'
  btn1.style.zIndex = '0'
})

btn1.addEventListener('click', () => {
  section.style.display = 'none'
  btn1.style.background = 'white'
  btn2.style.background = '#d3d3d3'
  btn1.style.zIndex = '1'
  btn2.style.zIndex = '0'
})



const footerBtn1 = document.getElementById("footerBtn1");
const wind = document.getElementById("window");
const closeBtn = document.getElementById("x");

footerBtn1.addEventListener("click", () => {
  // Показываем окно
  wind.style.display = "flex";

  // Сбрасываем анимацию
  wind.classList.remove("active");
  void wind.offsetWidth; // триггер для перезапуска анимации
  wind.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  // Убираем анимацию и скрываем окно после окончания анимации
  wind.classList.remove("active");
  
  // Можно использовать таймер равный длительности анимации (0.5s)
  setTimeout(() => {
    wind.style.display = "none";
  }, 500); // 500ms = длительность анимации в CSS
});



const text4 = document.querySelector(".text4");

// Функция для генерации случайной цифры от 0 до 9
function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

// Функция для генерации нового числа той же длины
function getRandomNumberString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += getRandomDigit();
  }
  return result;
}

// Событие клика
footerBtn1.addEventListener("click", () => {
  const length = text4.textContent.length; // сохраняем длину исходного числа
  text4.textContent = getRandomNumberString(length);
});



const footerBtn2 = document.getElementById("footerBtn2");

footerBtn2.addEventListener("click", async () => {
  if (navigator.canShare && navigator.canShare({ files: [] })) {
    try {
      // Загружаем файлы из папки img
      const image2 = await fetch('img/image 2.png').then(r => r.blob());
      const image3 = await fetch('img/image 3.png').then(r => r.blob());

      const filesArray = [
        new File([image2], 'image 2.png', { type: image2.type }),
        new File([image3], 'image 3.png', { type: image3.type })
      ];

      if (navigator.canShare({ files: filesArray })) {
        await navigator.share({
          files: filesArray,
          title: 'Документы',
          text: 'Смотри изображения документов'
        });
        console.log('Изображения успешно отправлены!');
      } else {
        alert('Ваше устройство не поддерживает шаринг файлов.');
      }

    } catch (err) {
      console.error('Ошибка при шаринге:', err);
    }
  } else {
    alert('Ваш браузер не поддерживает Web Share API для файлов.');
  }
});



const footerBtn3 = document.getElementById("footerBtn3");

// Текст для шаринга
const shareText = "Здесь вставь свой текст, который хочешь поделиться!";

footerBtn3.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Поделиться текстом',
        text: shareText
      });
      console.log('Текст успешно отправлен!');
    } catch (err) {
      console.error('Ошибка при попытке поделиться:', err);
    }
  } else {
    alert('Ваш браузер не поддерживает Web Share API');
  }
});


