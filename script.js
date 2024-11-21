const image1 = document.getElementById('image_1');
const image2 = document.getElementById('image_2');

document.querySelector('.switch-container').addEventListener('click', function() {
    image1.classList.toggle('switch-container__image_show');
    image1.classList.toggle('switch-container__image_hidden');
    image2.classList.toggle('switch-container__image_show');
    image2.classList.toggle('switch-container__image_hidden');
});

