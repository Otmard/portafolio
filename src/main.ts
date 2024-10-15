import Typed from 'typed.js';
import { ScrollReveal } from "../src/scrollreveal.min";

const typed = new Typed('.typing', {
    strings: ['<i>Software Developer</i>', '<i>Web Developer</i>', '<i>UI/UX Designer</i>'],
    typeSpeed: 40,
    loop: true,
    fadeOut: true,
    fadeOutDelay: 1000,
    backDelay: 5000,

});
typed.start();

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: true
});

sr.reveal('.container,.experience, .education');

sr.reveal('.nav, .logo', { origin: "left", reset: false })

sr.reveal('.home-img', { origin: "rigth" })

sr.reveal('.languages, .service-item, .portafolio-item', {
    rotate: {
        // x: 20,
        y: 50,
        // z: 20
    },
    interval: 250,
})




const link = document.querySelectorAll('.nav li a');
link.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        const targetSection = document.querySelector(target);

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
const logo = document.getElementById('logo') as HTMLImageElement
const dayNight = document.querySelector('.day-nigth')
dayNight.addEventListener('click', () => {
    console.log(logo.src);

    dayNight.querySelector('i').classList.toggle('fa-moon')
    dayNight.querySelector('i').classList.toggle('fa-sun')
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        logo.src = '/assets/images/logo-dark.svg'
    } else {
        logo.src = '/assets/images/logo.svg'

    }
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    } else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
}

)

function sendEmail(event) {
    event.preventDefault(); // Evitar el envío normal del formulario

    // Obtener los valores del formulario
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Crear el enlace mailto
    const mailtoLink = `mailto:ootmar1998@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Otmar,\n\nYou have a new message from ${name}.\n\nHere are the details:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}\n\nBest regards!`)}`

    // Abrir el cliente de correo electrónico
    window.location.href = mailtoLink;
}

// Añadir el listener para el formulario
document.getElementById('contactForm').addEventListener('submit', sendEmail);