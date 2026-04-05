document.addEventListener("DOMContentLoaded", function () {
    var headerBg = document.querySelector(".page-header .headerbg");
    if (headerBg) {
        var dots = document.querySelectorAll(".dot");
        if (dots.length > 0) {
            var images = [
                "./images/首页.png",
                "./images/ban2.png",
                "./images/ban3.png",
                "./images/ban4.png",
                "./images/ban5.png"
            ];
            var currentIdx = 0;
            var isChanging = false;
            function updateImage(index) {
                if (isChanging || index === currentIdx) return;
                isChanging = true;
                headerBg.classList.add("fade-out");
                setTimeout(function () {
                    headerBg.src = images[index];
                    currentIdx = index;
                    headerBg.classList.remove("fade-out");
                    for (var i = 0; i < dots.length; i++) {
                        if (i === index) {
                            dots[i].classList.add("active");
                        } else {
                            dots[i].classList.remove("active");
                        }
                    }
                    isChanging = false;
                }, 1000);
            }
            for (var i = 0; i < dots.length; i++) {
                (function (idx) {
                    dots[idx].addEventListener("click", function () {
                        updateImage(idx);
                    });
                })(i);
            }
            setInterval(function () {
                var nextIdx = (currentIdx + 1) % images.length;
                updateImage(nextIdx);
            }, 3000);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".zhong");
    if (items.length === 0) return;
    var leftArrow = document.querySelector(".left-arrow");
    var rightArrow = document.querySelector(".right-arrow");
    if (!leftArrow || !rightArrow) return;
    var currentIdx = 0;
    function showItem(index) {
        for (var i = 0; i < items.length; i++) {
            if (i === index) {
                items[i].classList.add("active");
            } else {
                items[i].classList.remove("active");
            }
        }
    }
    showItem(currentIdx);
    leftArrow.addEventListener("click", function () {
        currentIdx = (currentIdx - 1 + items.length) % items.length;
        showItem(currentIdx);
    });
    rightArrow.addEventListener("click", function () {
        currentIdx = (currentIdx + 1) % items.length;
        showItem(currentIdx);
    });
});
