

let blokone = document.querySelector('.div1');
let defaultTextBlock = 'Нажми на меня!'
let textBlock;


function abscractFunction(css, div) {
    let abscractBlok = document.querySelector(div);
    abscractBlok.classList.toggle(css);

    switch (div) {
        case '.div1':
            textBlock = 'Массаж на 25 минут!';
            break;
        case '.div2':
            textBlock = 'Любое блюдо на твой выбор!';
            break;
        case '.div3':
            textBlock = 'Твоя фантазия!';
            break;
        case '.div4':
            textBlock = 'Пивной вечер!';
            break;
        case '.div5':
            textBlock = 'Чешу голову 25 минут!';
            break;
        case '.div6':
            textBlock = 'Вечер игр на джойстиках!';
            break;
    }


    if (abscractBlok.innerHTML === defaultTextBlock) {
        abscractBlok.textContent = textBlock;
    } else {
        abscractBlok.textContent = defaultTextBlock;
    };

    loh();


};

function loh() {
    console.log('Люблю котьку!')
};

// let bloktwo = document.querySelector('.div2');

// function fun2() {
//     console.log('нажал!');
//     bloktwo.classList.toggle('for2');

//     console.log(bloktwo.innerHTML === 'Любое блюдо на твой выбор!')
//     if (bloktwo.innerHTML === 'Любое блюдо на твой выбор!') {
//         bloktwo.textContent = 'Нажми на меня!'
//     }
//     else {
//         bloktwo.textContent = 'Любое блюдо на твой выбор!'
//     };

// };


// let blokthree = document.querySelector('.div3');

// function fun3() {
//     console.log('нажал!');
//     blokthree.classList.toggle('for3');

//     console.log(blokthree.innerHTML === 'Твоя сексуальная фантазия!')
//     if (blokthree.innerHTML === 'Твоя сексуальная фантазия!') {
//         blokthree.textContent = 'Нажми на меня!'
//     }
//     else {
//         blokthree.textContent = 'Твоя сексуальная фантазия!'
//     };

// };

// let blokfour = document.querySelector('.div4');

// function fun4() {
//     console.log('нажал!');
//     blokfour.classList.toggle('for4');

//     console.log(blokfour.innerHTML === 'Пивной вечер!')
//     if (blokfour.innerHTML === 'Пивной вечер!') {
//         blokfour.textContent = 'Нажми на меня!'
//     }
//     else {
//         blokfour.textContent = 'Пивной вечер!'
//     };

// };

// let blokfive = document.querySelector('.div5');

// function fun5() {
//     console.log('нажал!');
//     blokfive.classList.toggle('for5');

//     console.log(blokfive.innerHTML === 'Чешу голову 25 минут!')
//     if (blokfive.innerHTML === 'Чешу голову 25 минут!') {
//         blokfive.textContent = 'Нажми на меня!'
//     }
//     else {
//         blokfive.textContent = 'Чешу голову 25 минут!'
//     };

// };

// let bloksix = document.querySelector('.div6');

// function fun6() {
//     console.log('нажал!');
//     bloksix.classList.toggle('for6');

//     console.log(bloksix.innerHTML === 'Вечер игр на джойстиках!')
//     if (bloksix.innerHTML === 'Вечер игр на джойстиках!') {
//         bloksix.textContent = 'Нажми на меня!'
//     }
//     else {
//         bloksix.textContent = 'Вечер игр на джойстиках!'
//     };

// };