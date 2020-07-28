openMenuEl.forEach((menuLink) => {
    menuLink.addEventListener('click', function (e) {
        e.preventDefault()
        bodyEl.classList.toggle('open-menu');
    });
});


tabEl.forEach((menuBtn) => {
    menuBtn.addEventListener('click', function (e) {
        const tabItem = e.target.closest('.menu-page__list');

        tabItem.classList.toggle('checked');
    });
});
