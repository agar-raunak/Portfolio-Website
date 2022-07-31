const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')
const vol_data = document.querySelector('vol')

// Clicking on the nav-toggle will result in opening of class nav-open

navToggle.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})


// vol_data.addEventListener('mouseover', ()=>{
//     document.body.classList.toggle('vol_open')
// })
