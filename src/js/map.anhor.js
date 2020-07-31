<<<<<<< HEAD
=======
// map
>>>>>>> 7d376c948b2561213ca73569d9acb3a2126cdd5d
mapAnhorEl.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionElem = mapAnhorEl.getAttribute('href');
    document.querySelector('' + sectionElem).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});