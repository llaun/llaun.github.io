import pictureList from './pictureList.js'

const pictureListEl = document.querySelector('.picture_list')
const modalEl = document.querySelector('.modal')

const createPictureEl = (imgPath, title, subtitle, index) => {
    const pictureEl = document.createElement('div')
    pictureEl.classList.add('picture')

    const imageEL = new Image()
    imageEL.src = imgPath

    const descriptionEl = document.createElement('div')
    descriptionEl.classList.add('description')
    descriptionEl.dataset.index = index

    const emptyDiv = document.createElement('div')

    const titleEl = document.createElement('div')
    titleEl.classList.add('title')
    titleEl.innerHTML = title

    const subtitleEl = document.createElement('div')
    subtitleEl.classList.add('subtitle')
    // subtitleEl.innerHTML = subtitle

    descriptionEl.appendChild(emptyDiv)
    descriptionEl.appendChild(titleEl)
    descriptionEl.appendChild(subtitleEl)

    pictureEl.appendChild(imageEL)
    pictureEl.appendChild(descriptionEl)

    return pictureEl
}

const onPictureListClick = (event) => {
    const dataIndex = event.target.dataset.index
    if (!dataIndex) return

    const pictureData = pictureList[dataIndex]

    modalEl.classList.remove('hidden')
    modalEl.querySelector('.modal_picture img').src = pictureData.path
    modalEl.querySelector('.modal_title').innerHTML = pictureData.title
    modalEl.querySelector('.modal_subtitle').innerHTML = pictureData.subtitle
    // list uyd [] benn

    console.log(pictureData)
}

const onLoad = () => {
    pictureList.forEach((el, index) => {
        const pictureEl = createPictureEl(el.path, el.title, el.subtitle, index)
        // pictureEl.dataset.info = index
        pictureListEl.appendChild(pictureEl)
    })

    pictureListEl.addEventListener('click', onPictureListClick)

    const modalBtnEl = modalEl.querySelector('.btn')
    modalBtnEl.addEventListener('click', () => {
        modalEl.classList.add('hidden')
    })
    // const pictureEl = createPictureEl('./img/hh.jpg', 'title', 'subtitle')
    // pictureList.appendChild(pictureEl)
}

window.addEventListener('load', onLoad)
