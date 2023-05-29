// change navbar style on scroll

window.addEventListener('scroll',() => {
document.querySelector('nav').classList.toggle
('window-scroll', window.scrollY > 0)
})


// show faq reponse(paragraph)

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')


        // change icon after it opens
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus'
        }
    })
})