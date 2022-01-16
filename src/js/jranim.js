/*
    JenjaRusAnimation - скрипт добавления анимации при скролле страницы
    Copyright (c) 2022 JenjaRus
*/

export default function JRAnim(options = {}) {
    const defaults = {
        animElem: '.anim', // Селектор для анимации
        animClass: 'anim-show', // Класс при срабатывании анимации
        animToggle: true, // Повтор анимации при скролле
        offset: 1, // Активация анимации от процента высоты элемента
        // libAnim: false, // Активация работы animate.css
    };
    const config = extend(options, defaults);
    const elements = document.querySelectorAll(config.animElem);
    const arrayElements = Array.prototype.slice.call(elements);

    const onAnimationBind = onAnimation.bind(this, arrayElements, config);

    if (arrayElements.length > 0) {
        window.addEventListener('scroll', throttle(onAnimationBind, 100));
        window.addEventListener('resize', throttle(onAnimationBind, 100));
        setTimeout(() => {
            onAnimation(arrayElements, config);
        }, 300)
    }
}

function extend(options, defaults) {
    for (const key in defaults) {
        if (options[key] == null) {
            const value = defaults[key];
            options[key] = value;
        }
    }
    return options;
}

const throttle = (func, ms) => {
    let locked = false;

    return function() {
        if (locked) return;

        const context = this;
        const args = arguments;

        locked = true;

        setTimeout(() => {
            func.apply(context, args)
            locked = false;
        }, ms)
    }
};

function validPercent(percent) {
    percent = parseInt(percent);
    if (percent <= 0) {
        percent = 1;
    } else if (percent > 100) {
        percent = 100;
    }
    return percent;
}

function onAnimation(elements, config) {
    const elementStart = 100 / validPercent(config.offset);

    elements.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementOffset = element.getBoundingClientRect().top + scrollTop;

        let elementPoint = window.innerHeight - elementHeight / elementStart;
        if (elementHeight > window.innerHeight) {
            elementPoint = window.innerHeight - window.innerHeight / elementStart;
        }

        if ((pageYOffset > elementOffset - elementPoint) && pageYOffset < (elementOffset + elementHeight)) {
            // if (config.libAnim) element.style.animationName = '';
            element.classList.add(config.animClass);
        } else {
            if (config.animToggle) {
                // if (config.libAnim) element.style.animationName = 'none';
                element.classList.remove(config.animClass);
            }
        }
    });
}
