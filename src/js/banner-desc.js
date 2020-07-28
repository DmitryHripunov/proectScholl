bannerDescBtnEl.forEach((bannerBtn) => {
    bannerBtn.addEventListener('click', function (e) {
        const bannerDesc = e.target.closest('.about__main-figure');

        bannerDesc.classList.toggle('open-banner-desc');
    });
});