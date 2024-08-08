const headerEl = document.querySelector('header')

const onWindowScroll = (Event) => {
    // console.log(scrollY)
    if (scrollY > 100) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
}

window.addEventListener('scroll', onWindowScroll)
