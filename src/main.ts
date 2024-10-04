import Typed from 'typed.js';

const typed = new Typed('.typing', {
    strings: ['<i>Software Developer</i>', '<i>Web Developer</i>', '<i>UI/UX Designer</i>'],
    typeSpeed: 40,
    loop: true,
    fadeOut: true,
    fadeOutDelay: 1000,
    backDelay: 5000,

});
typed.start();
const link = document.querySelectorAll('.nav li a');
link.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        const targetSection  = document.querySelector(target);

        const scrollTo = (target) => {
            const top = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: top,
                behavior: 'smooth' // Efecto de desplazamiento suave
            });
        }
        scrollTo(targetSection);
    })
})
document.querySelectorAll('.colors span').forEach(color => {
    color.addEventListener('click', () => {
        const colorVariable = color.getAttribute('data-color');
        setActiveStyle(colorVariable);
    });
});
const buttonColor = document.querySelector('.style-switcher')
buttonColor.addEventListener('click', () => {
    const styleSwitcher = document.querySelector('.style-switcher')
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open')
    } else {
        styleSwitcher.classList.add('open')
    }
})

// hide on scroll
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})
function setActiveStyle(color: string) {
    console.log(color);

    const root = document.documentElement;

    switch (color) {
        case '--skin-color-1':
            root.style.setProperty('--skin-color', "#ec1839");
            break;
        case '--skin-color-2':
            root.style.setProperty('--skin-color', "#ff9900");
            break;
        case '--skin-color-3':
            root.style.setProperty('--skin-color', "#2caf1a");
            break;
        default:
            break;
    }
}
const dayNight = document.querySelector('.day-nigth')
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-moon')
    dayNight.querySelector('i').classList.toggle('fa-sun')
    document.body.classList.toggle('dark')
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')

    } else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
}

)