let menu = document.querySelector(".side-menu__burger");
let dropMenu = document.querySelector('.burger-menu');
let back = document.querySelector('.dashboard');
let plate = document.querySelector(".list_dash");

let block1 = document.querySelectorAll(".block1");
let block2 = document.querySelectorAll('.block2');
let block3 = document.querySelectorAll('.block3');
let block4 = document.querySelectorAll('.block4');
let block5 = document.querySelectorAll('.block5');
let block6 = document.querySelectorAll('.block6');
let block7 = document.querySelectorAll('.block7');
let block8 = document.querySelectorAll('.block8');

menu.addEventListener("click", event => {
    dropMenu.style.display = 'block';
    setTimeout(() => {
        back.style.display = 'none';
    }, 500);
    anime({
        targets: ".burger-menu",
        translateX: {
            value: [750, 0],
            easing: 'easeInOutSine',
            duration: 500
        },
        opacity: {
            value: [0, 1],
            easing: 'easeInOutSine',
            duration: 600
        }
    })
});

dropMenu.addEventListener("click", event => {
    anime({
        targets: ".burger-menu",
        translateX: {
            value: [0, 750],
            easing: 'easeInOutSine',
            duration: 500
        },
        opacity: {
            value: [1, 0],
            easing: 'easeInOutSine',
            duration: 600
        }
    })
    setTimeout(() => {
        dropMenu.style.display = 'none';
    }, 500);
    back.style.display = 'block';
});

function showInfo(i) {
    if (i == 1) {
        plate.style.display = 'flex';        
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block1.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 2) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block2.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 3) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block3.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 4) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block4.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 5) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block5.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 6) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block6.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 7) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block7.forEach(element => {
            element.style.display = 'block';
        })
    }
    if (i == 8) {
        plate.style.display = 'flex';
        anime({
            targets: ".list_dash",
            opacity: {
                value: [0, 1],
                easing: 'easeInOutSine',
                duration: 200
            }
        })
        block8.forEach(element => {
            element.style.display = 'block';
        })
    }
}

plate.addEventListener("click", event => {
    anime({
        targets: ".list_dash",
        opacity: {
            value: [1, 0],
            easing: 'easeInOutSine',
            duration: 200
        }
    })
    setTimeout(() => {
        plate.style.display = 'none';
        block1.forEach(element => {
            element.style.display = 'none';
        })
        block2.forEach(element => {
            element.style.display = 'none';
        })
        block3.forEach(element => {
            element.style.display = 'none';
        })
        block4.forEach(element => {
            element.style.display = 'none';
        })
        block4.forEach(element => {
            element.style.display = 'none';
        })
        block5.forEach(element => {
            element.style.display = 'none';
        })
        block6.forEach(element => {
            element.style.display = 'none';
        })
        block7.forEach(element => {
            element.style.display = 'none';
        })
        block8.forEach(element => {
            element.style.display = 'none';
        })
    }, 200);
})