
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
            root.style.setProperty('--skin-color',"#ec1839" );
            break;
        case '--skin-color-2':
            root.style.setProperty('--skin-color',"#ff9900" );
            break;
        case '--skin-color-3':
            root.style.setProperty('--skin-color',"#2caf1a" );
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

    }else{
        dayNight.querySelector('i').classList.add('fa-moon')}
    }
        
    )