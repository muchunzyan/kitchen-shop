const createSliderAndExpander = (card) => {
    const swiperEl = card.querySelector('.swiper');
    const paginationEl = card.querySelector('.slider__pagination');
    const nextEl = card.querySelector('.slider-btn-next');
    const prevEl = card.querySelector('.slider-btn-prev');
    const expandBtn = card.querySelector('.slider-expand-button');

    const swiperOptions = {
        loop: true,
        pagination: {
            el: paginationEl,
            clickable: false,
        },
        navigation: {
            nextEl,
            prevEl,
        },
    }

    if (window.innerWidth < 576) {
        swiperOptions['autoplay'] = {
            delay: 3000,
            disableOnInteraction: false,
        }
    }

    const swiper = new Swiper(swiperEl, swiperOptions);


    expandBtn?.addEventListener('click', () => {
        const startIndex = swiper.realIndex;

        Fancybox.show([
            {src: './img/kitchen.png', type: 'image'},
            {src: './img/kitchen.png', type: 'image'},
            {src: './img/kitchen.png', type: 'image'},
            {src: './img/kitchen.png', type: 'image'},
            {src: './img/kitchen.png', type: 'image'},
            {src: './img/kitchen.png', type: 'image'},
        ], {
            startIndex,
        });
    });
}

const handleCardClick = (e) => {
    if (
        (!(e.target.closest('button') || e.target.closest('a'))) &&
        e.target.closest('.card')
    ) {
        window.open('/card', '_blank').focus()
    }
}

const handleMaterialsSelection = (e) => {
    const clickedItem = e.target.closest('.materials__selector-item')

    if (clickedItem) {
        const items = clickedItem.closest('.materials__selector');

        for (const item of items.children) {
            item.classList.remove('materials__selector-item--selected')
        }

        clickedItem.classList.add('materials__selector-item--selected')
    }
}

const handleLikeClick = (e) => {
    const likesElement = e.target.closest('.card__likes')
    if (likesElement) {
        const likeIcon = likesElement.querySelector('.card__likes-icon')
        likeIcon.classList.toggle('card__likes-icon--active')
    }
}


document.querySelectorAll('.card').forEach((card) => {
    createSliderAndExpander(card)
});

document.onclick = (e) => {
    handleCardClick(e)
    handleMaterialsSelection(e)
    handleLikeClick(e)
}