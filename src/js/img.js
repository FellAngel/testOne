let images = document.querySelector(".main");
let currentIndex = -1;
let photoName = "";
let i = 1000;

function checkOpacity() {
    if (images.style.opacity === '0.5') {
        images.style.backgroundImage = photoName;
        images.style.opacity = '1';
    }
}

function changeOpacity() {
    images.style.opacity = '0.51';
    setTimeout(images.style.opacity = '0.5', 3000)
}


function changeImage() {

    if (currentIndex < 2) {
        currentIndex ++;
    }
    else {
        currentIndex = 0;
    }

    switch (currentIndex) {
        case 0:
            photoName = 'url(\'./img/images/photo1.png\')'
            break;
        case 1:
            photoName = 'url(\'./img/images/photo2.png\')'
            break;
        case 2:
            photoName = 'url(\'./img/images/photo3.png\')'
            break;
    }

    setTimeout(changeOpacity, 3000);
}

// Запускаем цикл изменения изображений каждые ? секунд
changeImage();
setInterval(changeImage, 3000);
setInterval(checkOpacity, 200);
