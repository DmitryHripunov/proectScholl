"use strict";bannerDescBtnEl.forEach(function(e){e.addEventListener("click",function(e){e.target.closest(".about__main-figure").classList.toggle("open-banner-desc")})}),document.addEventListener("keydown",function(e){"Escape"!==e.target&&"Esc"!==e.target&&27!==e.keyCode||figureEl.classList.remove("open-banner-desc")});