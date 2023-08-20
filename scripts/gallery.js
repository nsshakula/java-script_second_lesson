//Задание 2.
//Создайте страницу, подключите скрипт. Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
let message = () => console.log("Я учу JavaScript!");
message();

//Задание 3.
//Создайте галерею переключения изображений.
//В ней будет две кнопки: вперёд и назад, которые должны переключать изображение (в галерее пока будет 2 картинки, но если можете больше, то делайте).
const galleryCard = document.getElementById("flower");

function addBtnBack() {
  galleryCard.src = "./assets/gallery/image/snowdrop.jpg";
}

function addBtnForward() {
  galleryCard.src = "./assets/gallery/image/primroses.jpg";
}
