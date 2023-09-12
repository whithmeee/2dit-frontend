const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', (event) => {
        event.preventDefault();

        const accordionActive = document.querySelector('.accordion-item-header.active');

        if (accordionActive && accordionActive !== accordionItemHeader) {
            accordionActive.classList.toggle('active');
            accordionActive.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

const form = document.forms['form'];

const button = document.querySelector('#button');

const inputArr = Array.from(form);

const validInputArr = [];

inputArr.forEach((e) => {
    if (e.hasAttribute('data-reg')) {
        e.setAttribute('is-valid', '0');
        validInputArr.push(e);
    }
});

console.log(validInputArr);

console.log(inputArr);

form.addEventListener('input', inputHandler);

button.addEventListener('click', buttonHandler);

function inputHandler({ target }) {
    if (target.hasAttribute('data-reg')) {
        inputCheck(target);
    }
}

function inputCheck(e) {
    const inputValue = e.value;
    const inputReg = e.getAttribute('data-reg');
    const reg = new RegExp(inputReg);

    if (reg.test(inputValue)) {
        e.style.border = '1px solid rgb(0, 196, 0)';
        e.setAttribute('is-valid', '1');
    } else {
        e.style.border = '1px solid rgb(255, 0, 0)';
        e.setAttribute('is-valid', '0');
    }
}

function buttonHandler(e) {
    const isAllValid = [];

    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute('is-valid'));
    });

    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });

    if (!Number(isValid)) {
        e.preventDefault();
        alert('Заполните все поля');

        for (let i = 0; i < form.length; i++) {
            form[i].style.border = '1px solid rgb(255, 0, 0)';
        }
    } else {
        alert('Данные отпрвлены');

        for (let i = 0; i < form.length; i++) {
            form[i].value = '';
            form[i].style.border = '1px solid #ffffff';
        }
    }
}

const graphics1 = document.getElementById('graphics1');
const graphics2 = document.getElementById('graphics2');
const graphics3 = document.getElementById('graphics3');
const graphics4 = document.getElementById('graphics4');

let str = 'шт.';

Morris.Donut({
    element: 'graphics1',
    data: [
        { label: 'Россия', value: 335 },
        { label: 'Узбекистан', value: 100 },
        { label: 'Казахстан', value: 200 },
    ],
    colors: ['#E83C46', '#000000', '#F9A620'],
    resize: false,

    formatter: function (label) {
        return label + ' шт.';
    },
});

Morris.Donut({
    element: 'graphics2',

    data: [
        {
            label: 'Тюмень',
            value: 200,
        },
        {
            label: 'Нур-Султан',
            value: '300',
        },
        {
            label: 'Ташкент',
            value: 150,
            formatter: 'шт.',
        },
        {
            label: 'Петербург',
            value: 1000,
        },
        {
            label: 'Алма-Аты',
            value: 300,
        },
    ],

    colors: ['#E83D46', '#F9A620', '#000000', '#005FA7', '#808080'],

    resize: false,

    formatter: function (value) {
        return +value + ' шт.';
    },
});

Morris.Donut({
    element: 'graphics3',
    data: [
        { label: 'Россия', value: 130 },
        { label: 'Узбекистан', value: 80 },
        { label: 'Казахстан', value: 40 },
    ],
    colors: ['#E83C46', '#000000', '#F9A620'],
    resize: false,

    formatter: function (value) {
        return '$' + value + ' млн.';
    },
});

Morris.Donut({
    element: 'graphics4',

    data: [
        {
            label: 'Тюмень',
            value: 100,
        },
        {
            label: 'Нур-Султан',
            value: 90,
        },
        {
            label: 'Ташкент',
            value: 70,
        },
        {
            label: 'Петербург',
            value: 150,
        },
        {
            label: 'Алма-Аты',
            value: 80,
        },
    ],

    colors: ['#E83D46', '#F9A620', '#000000', '#005FA7', '#808080'],

    resize: false,

    formatter: function (value) {
        return '$' + value + ' млн.';
    },
});
