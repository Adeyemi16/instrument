let nav = document.getElementById('nav');
nav.addEventListener('click', () => {
    let show = document.getElementById('show');
    show.classList.add('show')
    show.classList.remove('navlinks')
})

let show = document.getElementById('show');
show.addEventListener('click', () => {
    let b = document.getElementById('show');
    b.classList.add('navlinks')
    b.classList.remove('show')
})