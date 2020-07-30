bannerDescBtnEl.forEach((bannerBtn) => {
    bannerBtn.addEventListener('click', function (e) {
        const bannerDesc = e.target.closest('.about__main-figure');

        bannerDesc.classList.toggle('open-banner-desc');
    });
});

document.addEventListener('keydown', function (e) {
    if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
        figureEl.classList.remove('open-banner-desc');
    };
});
