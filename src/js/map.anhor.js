// map
mapAnhorEl.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionElem = mapAnhorEl.getAttribute('href');
    document.querySelector('' + sectionElem).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});