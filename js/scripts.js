document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.querySelector('.header').addEventListener('click', e => {
        const accordionBody = accordion.querySelector('.accordion-body')
        const accordionSymbol = accordion.querySelector('.header span')
        accordionBody.classList.toggle('open')
        if (accordionBody.classList.contains('open')) {
            accordionSymbol.textContent = '-'
        } else {
            accordionSymbol.textContent = '+'
        }
    })
})