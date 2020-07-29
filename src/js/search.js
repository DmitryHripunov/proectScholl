searchEl.addEventListener('click', openField);
closeEl.addEventListener('click', closeField);

function openField(e) {
    e.preventDefault();
    headerEl.classList.toggle('search-open');
    searhFieldEl.focus();
    this.removeEventListener('click', openField);
};

function closeField() {
    headerEl.classList.remove('search-open');
    searchEl.addEventListener('click', openField);
}

closeEl.addEventListener('click', function (e) {
    e.preventDefault()
    headerEl.classList.remove('search-open');
    searchEl.addEventListener('click', openField);
    searhFieldEl.value = '';
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__searh')) {
        headerEl.classList.remove('search-open');
        searchEl.addEventListener('click', openField);
        searhFieldEl.value = '';
    };
});

document.addEventListener('keydown', function (e) {
    if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
        headerEl.classList.remove('search-open');

        searchEl.addEventListener('click', openField);
        searhFieldEl.value = '';
    };
});